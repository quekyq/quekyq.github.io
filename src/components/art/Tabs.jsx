import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function Tabs({ setActiveTab }) {
    const location = useLocation();
    const isIllustrationActive = location.pathname.includes('illustration') || (!location.pathname.includes('animation') && !location.pathname.includes('illustration'));
    const isAnimationActive = location.pathname.includes('animation');

    return (
        <div className="px-8 flex justify-center gap-4 text-base lowercase font-body">
            <Link
                to="/art/illustration"
                onClick={() => setActiveTab('illustration')}
                className={`px-3 py-2 border-2 rounded-md transition-colors ${
                    isIllustrationActive
                    ? 'border-emerald-500 text-emerald-500' 
                    : 'text-black border-stone-950 hover:text-rose-400 hover:border-rose-400 bg-transparent'
                }`}
            >
                Illustration
            </Link>
            <Link
                to="/art/animation"
                onClick={() => setActiveTab('animation')}
                className={`px-3 py-2 border-2 rounded-md transition-colors ${
                    isAnimationActive
                    ? 'text-emerald-500 border-emerald-500'
                    : 'text-black border-stone-950  hover:text-rose-400 hover:border-rose-400 bg-transparent'
                }`}
            >
                Animation
            </Link>
        </div>
    );
}

Tabs.propTypes = {
    setActiveTab: PropTypes.func.isRequired
};

export default Tabs; 