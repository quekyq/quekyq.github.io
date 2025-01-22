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
                <div className="mb-6">
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Study With Me</h1>
                    <div className="flex flex-wrap gap-3 justify-center text-sm font-body text-stone-600">
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
                                className="inline-flex items-center gap-2 border-2 border-slate-950 text-slate-950 hover:text-rose-400 transition-colors  rounded-lg px-2 mx-1 text-sm"
                            >
                                Visit site
                            </a>
                            <a 
                                href="https://github.com/quekyq/studywithme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-slate-950 text-slate-950 hover:text-rose-400 transition-colors  rounded-lg px-2 mx-1 text-sm"
                            >
                                View on Github
                            </a>
                        </div>
                </div>

                {/* Main Image/Video Section */}
                <div className="aspect-video w-full mb-8">
                    <iframe 
                    
                        src="https://player.vimeo.com/video/1049396513?h=0a7efc633c&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                        className="w-full h-full rounded-lg"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        title="Study with Me Demo"
                    />
                </div>

                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 text-black">
                        <h2 className="text-2xl font-title mb-4">Overview</h2>
                        <p className="text-base font-body mb-6">
                        "Study with me" is a web application developed in a team of 4 during a hackathon. It is designed to help users manage timed study sessions with customizable avatars as study buddies. 
                        <br/><br/>
                        The app includes features like adjustable session lengths, music options, a study plan where users can map out tasks, and sticky notes for jotting down quick thoughts. I was mainly responsible for front-end development, creating illustrations, and feature ideation. 
                        </p>
                    </div>
                </div>

                {/* Slide Deck Section */}
                <h2 className="text-xl font-title text-black mb-4">Click through the slides to learn more!</h2>
                <div className="aspect-video flex justify-center w-full mb-8">
                    <iframe 
                        width="960" 
                        height="540" 
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
