import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import lilypad from '../../assets/art/lilypad.webp';

function PortfolioProject() {
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
                <div className="mb-6">
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Personal Site</h1>
                    <div className="flex flex-wrap gap-3 justify-center text-sm font-body text-stone-600">
                        <span>Vite</span>
                        <span>•</span>
                        <span>React.js</span>
                        <span>•</span>
                        <span>Tailwind CSS</span>
                    </div>
                    <div className="font-body mt-3">
                            <a 
                                href="https://github.com/quekyq/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-slate-950 text-slate-950 hover:text-rose-400 hover:border-rose-400 transition-colors rounded-lg px-2 mx-1 text-sm"
                            >
                                View on GitHub
                            </a>
                        </div>
                </div>


                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="md:mb-14 mb-8 text-black">
                        <p className="text-base font-body">
                            I built this website from scratch as a space to share my programming projects and artworka. It&apos;s a blend of my aesthetic tastes and technical skills, crafted with love and care.
                            <br/><br/>
                            Thank you for stopping by — I hope you enjoyed exploring! ♡(ʘ ꒳ ʘ✿)
                        </p>
                </div>
                <div className="w-[70%] md:w-[100%] max-w-[400px] aspect-square rounded-full overflow-hidden mx-auto">
                            <div className="relative w-full h-full">
                                <img 
                                    src= { lilypad }
                                    alt="Lilypad Illustration" 
                                    className="absolute w-[125%] h-[125%] object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        </div>
            </div>
            </div>
        </div>
    );
}

export default PortfolioProject;
