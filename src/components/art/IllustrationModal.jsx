import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function IllustrationModal({ 
    selectedImage, 
    currentIndex, 
    images, 
    onClose, 
    onNext, 
    onPrev, 
    onThumbnailClick 
}) {
    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col" onClick={onClose}>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close gallery"
            >
                <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex-1 relative flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <button 
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                <div className="w-[85vw] h-[75vh] flex items-center justify-center">
                    <img 
                        src={selectedImage} 
                        alt="Full view" 
                        className="max-w-full max-h-full object-contain"
                    />
                </div>

                <button 
                    onClick={onNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </button>
            </div>

            <div className="h-24 bg-black/50 flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <div className="flex gap-2 px-4 overflow-x-auto">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => onThumbnailClick(image, index)}
                            className={`
                                flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden 
                                transition-all duration-200
                                ${currentIndex === index 
                                    ? 'ring-2 ring-white scale-105' 
                                    : 'ring-1 ring-white/20 hover:ring-white/50'
                                }
                            `}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IllustrationModal; 