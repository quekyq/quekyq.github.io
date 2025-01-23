import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AnimationGrid({ animations }) {
    const getSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2">
            {animations.map((animation) => (
                <Link 
                    key={animation.id} 
                    to={`/art/animation/${getSlug(animation.title)}`}
                    className="relative aspect-video group"
                >
                    <img
                        src={animation.thumbnail}
                        alt={animation.title}
                        className="w-full h-full object-cover rounded-lg border-2 border-stone-950 group-hover:border-rose-400 transition-all duration-100"
                    />
                    <div className="absolute inset-0 bg-black/0 rounded-lg group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
                        <h3 className="text-white font-title text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {animation.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

AnimationGrid.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default AnimationGrid; 