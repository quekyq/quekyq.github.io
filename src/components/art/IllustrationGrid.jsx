function IllustrationGrid({ images, onImageClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 py-8">
            {images.map((image, index) => (
                <div key={index} className="relative">
                    <img
                        src={image}
                        alt={`Art ${index + 1}`}
                        className="w-full h-56 hover:border-rose-400 hover:drop-shadow-xl transition-all duration-300 rounded-lg border-2 border-stone-950 object-cover cursor-pointer"
                        onClick={() => onImageClick(image, index)}
                    />
                </div>
            ))}
        </div>
    );
}

export default IllustrationGrid; 