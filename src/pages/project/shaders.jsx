import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function ShadersProject() {
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
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Graphics Shaders</h1>
                    <div className="flex flex-wrap gap-3 justify-center text-sm font-body text-stone-600">
                        <span>C++</span>
                        <span>•</span>
                        <span>OpenGL</span>
                    </div>
                </div>

                {/* Main Image/Video Section */}
                <div className="w-full mb-8 relative h-[25vh] overflow-hidden rounded-2xl">
                    <iframe 
                        src="https://player.vimeo.com/video/1049525367?h=37b0c78c93&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                        className="absolute top-1/2 -translate-y-1/2 w-full h-[100vh]"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        title="Shaders"
                    ></iframe>
                </div>

                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 text-black">
                        <p className="text-base font-body mb-6">
                            I experimented with various shader effects, applied on a simple circle geometry. These shaders are built with <strong>noise functions</strong> like Perlin noise and fractal noise, with some incorporating domain warping to create more organic distortion effects. 
                            
                        </p>

                        {/* Shaders Section */}
                        <div className="mt-12 pt-12 border-t-2 border-t-stone-400">
                            {/* <h2 className="text-2xl font-title mb-8">Individual Shaders</h2> */}
                            {/* Shader 1: Pattern */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="order-2 md:order-2">
                                    <div className="aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049540590?h=403961b259&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Pattern Shader"
                                        ></iframe>
                                    </div>
                                </div>
                            
                                <div className="order-1 md:order-1 flex flex-col justify-center">
                                    <h3 className="text-xl font-title mb-4">Pattern Shader</h3>
                                    <p className="text-base md:text-left font-body">
                                    This shader was a fun exploration of animated patterns, with the final design featuring colors and pattern complexity that dynamically respond to mouse movement.
                                    </p>
                                </div>
                            </div>
                            {/* Shader 2: Earth Shader*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
                                <div className="order-1 md:order-2 flex flex-col justify-center">
                                    <h3 className="text-xl font-title mb-4">Earth Shader</h3>
                                    <p className="text-base md:text-left font-body">
                                        I warped Fractal Brownian Motion (FBM) noise to create an Earth-like texture. Dragging the mouse in either directions fast-forwards/backwards Earth's tectonic shifts.
                                    </p>
                                </div>
                                <div className="order-2 md:order-1">
                                    <div className="aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049542144?h=b9c85af18b&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Earth Shader"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3: Liquid Shader */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-xl font-title mb-4">Liquid Shader</h3>
                                    <p className="text-base md:text-left font-body">
                                        I created a cool-looking black liquid that flows with time by warping FBM-Perlin noise.
                                    </p>
                                </div>
                                <div className="order-2 md:order-2">
                                    <div className="aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049543427?h=6422d6df9f&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Liquid Shader"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* Shader 4: Fire Shader */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="order-1 md:order-2 flex flex-col justify-center">
                                    <h3 className="text-xl font-title mb-4">Fire Shader</h3>
                                    <p className="text-base md:text-left font-body">
                                        I used warped FBM-Perlin noise to simulate a fireball. The fireball jitters rapidly to emulate the intense flickering of the blaze.
                                    </p>
                                </div>
                                <div className="order-2 md:order-1">
                                    <div className="aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049544054?h=5afc1c6b7c&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Fire Shader"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default ShadersProject;
