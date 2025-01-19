import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function StudyWithMeProject() {
    const navigate = useNavigate();

    return (
        <div className="px-4 py-8">
            <button 
                onClick={() => navigate('/projects')}
                className="mb-6 flex items-center gap-2 text-stone-950 hover:text-rose-400 transition-colors font-body"
            >
                <ChevronLeft className="w-4 h-4" />
                Back to Projects
            </button>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-title mb-4 text-stone-950">Study With Me</h1>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR3uEZ6NO2R85rvUu6dADkcy8t7dsWUH5_28dIHobknnOeKDaLL-rz3KFG2eXRByAPlHGaJrhKal7Qe/embed?start=false&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
    );
}

export default StudyWithMeProject;
