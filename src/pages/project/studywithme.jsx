import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trophy } from 'lucide-react';

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

            <div className="max-w-5xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Study With Me</h1>
                    <div className="flex flex-wrap gap-1 md:gap-3 justify-center text-xs md:text-sm font-body text-stone-600">
                        <span>React.js</span>
                        <span>•</span>
                        <span>Procreate</span>
                        <span>•</span>
                        <span>Adobe Illustrator</span>
                    </div>
                    <div className="font-body mt-3">
                        <a 
                            href="https://quekyq.github.io/studywithme/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border-2 border-slate-950 text-slate-950 hover:border-rose-400 hover:text-rose-400 transition-colors rounded-lg px-2 mx-1 text-sm"
                        >
                            Visit site
                        </a>
                        <a 
                            href="https://github.com/quekyq/studywithme"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border-2 border-slate-950 text-slate-950 hover:border-rose-400 hover:text-rose-400 transition-colors rounded-lg px-2 mx-1 text-sm"
                        >
                            View on Github
                        </a>
                    </div>
                </div>

                {/* Main Image/Video Section */}
                <div className="relative mt-6 flex justify-center">
                    <div className="w-full md:w-[85%] aspect-video">
                    <iframe 
                        src="https://player.vimeo.com/video/1049396513?h=0a7efc633c&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                        className="w-full h-full rounded-lg"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        title="Study with Me Demo"
                    />
                    </div>
                </div>

                {/* Award Banner */}
                <div className="mb-4  border-amber-200 rounded-lg p-4 flex items-center justify-center gap-3">
                    <Trophy className="w-8 h-8 text-rose-400 flex-shrink-0" />
                    <div>
                        <h3 className="font-title text-rose-400 text-lg">First Place Winner</h3>
                        <p className="font-body text-rose-300 text-sm">MCIT Hackathon 2024</p>
                    </div>
                </div>

                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 text-black">
                        <p className="text-base font-body mb-6">
                            <a href="https://quekyq.github.io/studywithme/" target="_blank" className='text-emerald-500 hover:text-rose-400 italic'>Study with me </a>
                            is a web application I developed in a team of 4 for a hackathon. It is designed to help users manage timed study sessions with customizable avatars as study buddies. 
                            <br/><br/>
                            The app includes features like customizable study session lengths, study music, a study plan where users can map out tasks, and sticky notes for jotting down quick thoughts. I was mainly responsible for front-end development, creating illustrations, and feature ideation. 
                        </p>
                    </div>
                </div>

                {/* Slide Deck Section */}
                <h2 className="mt-12 pt-12 border-t-2 border-t-stone-400 text-xl font-title text-black mb-4">Click through the slides to learn more!</h2>
                <div className="aspect-video flex justify-center w-full mb-8">
                    <iframe 
                        width="680" 
                        height="420" 
                        src="https://docs.google.com/presentation/d/e/2PACX-1vR3uEZ6NO2R85rvUu6dADkcy8t7dsWUH5_28dIHobknnOeKDaLL-rz3KFG2eXRByAPlHGaJrhKal7Qe/embed?start=false&loop=true&delayms=3000" 
                        title="Study With Me Slide Deck" 
                        allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
                    />
                </div>
            </div>
        </div>
    );
}

export default StudyWithMeProject;
