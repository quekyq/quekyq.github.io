import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { animations } from '../data/animations';
import { ChevronLeft } from 'lucide-react';
import IllustrationGrid from '../components/art/IllustrationGrid';
import IllustrationModal from '../components/art/IllustrationModal';

function AnimationDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Find the animation by converting title to slug and matching
    const animation = animations.find(anim => 
        anim.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % animation.processImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(animation.processImages[nextIndex]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + animation.processImages.length) % animation.processImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(animation.processImages[prevIndex]);
    };

    if (!animation) {
        return (
            <div className="px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-title mb-4">Animation not found</h1>
                    <button 
                        onClick={() => navigate('/art/animation')}
                        className="text-stone-950 hover:text-rose-400 transition-colors font-body"
                    >
                        Back to Animations
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 py-8">
            <button 
                onClick={() => navigate('/art/animation')}
                className="mb-6 flex items-center gap-2 text-stone-950 hover:text-rose-400 transition-colors font-body"
            >
                <ChevronLeft className="w-4 h-4" />
                Back to Animations
            </button>

            <div className="max-w-5xl mx-auto ">
                
                <h1 className="text-3xl font-title mb-4 text-stone-950">{animation.title}</h1>
                <div className="flex flex-wrap gap-1 md:gap-3 justify-center text-sm font-body text-stone-600">
                    <span>{animation.year}</span>
                    <span>•</span>
                    <span>{animation.duration}</span>
                    <span>•</span>
                    <span>{animation.role}</span>
                </div>
            
                <div className="relative mt-6 flex justify-center">
                    <div className="w-full md:w-[85%] aspect-video">
                        <iframe
                            src={animation.embed}
                            className="absolute inset-0 w-full h-full rounded-lg"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title={animation.title}
                        />
                    </div>
                </div>

                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 mt-8 text-black">
                        <p className="text-base font-body">{animation.description}</p>
                        
                        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8 text-emerald-500 ">
                            {animation.awards && (
                                <div>
                                    <h3 className="text-base uppercase font-body pb-4">Awards</h3>
                                    <ul className="list-none text-left font-body space-y-1 text-xs">
                                        {animation.awards.map((award, index) => (
                                            <li key={index}>{award}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {animation.selections && (
                                <div>
                                    <h3 className="text-base uppercase font-body pb-4">Official Selections</h3>
                                    <ul className="list-none font-body  space-y-1 text-left text-xs">
                                        {animation.selections.map((selection, index) => (
                                            <li key={index}>{selection}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {animation.processImages && animation.processImages.length > 0 && (
                        <div>
                            <IllustrationGrid 
                                images={animation.processImages}
                                onImageClick={handleImageClick}
                            />
                        </div>
                    )}

                    {selectedImage && (
                        <IllustrationModal
                            selectedImage={selectedImage}
                            currentIndex={currentIndex}
                            images={animation.processImages}
                            onClose={() => setSelectedImage(null)}
                            onNext={handleNext}
                            onPrev={handlePrev}
                            onThumbnailClick={handleImageClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AnimationDetail; 