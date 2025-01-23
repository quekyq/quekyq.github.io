import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { artImages } from '../assets/art';
import { animations } from '../data/animations';
import Tabs from '../components/art/Tabs';
import IllustrationGrid from '../components/art/IllustrationGrid';
import AnimationGrid from '../components/art/AnimationGrid';
import IllustrationModal from '../components/art/IllustrationModal';

function Art() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Determine active tab from URL
    const activeTab = location.pathname.includes('animation') ? 'animation' : 'illustration';

    useEffect(() => {
        // Update URL when tab changes
        navigate(`/art/${activeTab}`, { replace: true });
    }, [activeTab, navigate]);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % artImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(artImages[nextIndex]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + artImages.length) % artImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(artImages[prevIndex]);
    };

    return (
        <div className="px-4 py-8">
            <div className="md:max-w-6xl mx-auto">
                <Tabs activeTab={activeTab} setActiveTab={(tab) => navigate(`/art/${tab}`)} />

                {activeTab === 'illustration' && (
                    <IllustrationGrid 
                        images={artImages} 
                        onImageClick={handleImageClick} 
                    />
                )}

                {activeTab === 'animation' && (
                    <AnimationGrid animations={animations} />
                )}

                {selectedImage && activeTab === 'illustration' && (
                    <IllustrationModal
                        selectedImage={selectedImage}
                        currentIndex={currentIndex}
                        images={artImages}
                        onClose={() => setSelectedImage(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        onThumbnailClick={handleImageClick}
                    />
                )}
            </div>
        </div>
    );
}

export default Art;