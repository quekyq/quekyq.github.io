import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function ChartifyProject() {
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
                <h1 className="text-3xl font-title mb-4 text-stone-950">Chartify</h1>
            </div>
        </div>
    );
}

export default ChartifyProject;
