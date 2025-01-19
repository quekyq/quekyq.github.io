import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function MinecraftProject() {
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
                    <h1 className="text-3xl font-title mb-4 text-stone-950">MINI MINECRAFT</h1>
                    <div className="flex flex-wrap gap-3 justify-center text-sm font-body text-stone-600">
                        <span>C++</span>
                        <span>•</span>
                        <span>OpenGL</span>
                        <span>•</span>
                        <span>GLSL</span>
                    </div>
                </div>

                {/* Main Image/Video Section */}
                <div className="aspect-video w-full mb-8">
                <iframe width="960" height="540" src="https://www.youtube.com/embed/Q4AYDLjnAJw?si=0lbrsT9ne0g8qcnI?vq=hd1080p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
                </div>

                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 text-black">
                        <h2 className="text-2xl font-title mb-4">Overview</h2>
                        <p className="text-base font-body mb-6">
                            A mini version of Minecraft built from scratch using C++ and OpenGL. 
                            Features procedural terrain generation, basic physics, and block manipulation.
                        </p>

                        {/* Features Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-title mb-4">Features</h2>
                            <ul className="list-disc list-inside font-body space-y-2">
                                <li>Procedural terrain generation using Perlin noise</li>
                                <li>Basic physics and collision detection</li>
                                <li>Block placement and destruction</li>
                                <li>Texture mapping and basic shading</li>
                                <li>Day/night cycle with dynamic lighting</li>
                            </ul>
                        </div>

                        {/* Technical Details */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-title mb-4">Technical Implementation</h2>
                            <div className="font-body space-y-4">
                                <p>
                                    The project uses modern OpenGL with custom vertex and fragment shaders. 
                                    Terrain chunks are generated using multiple octaves of Perlin noise, 
                                    and the world is rendered using instanced rendering for optimal performance.
                                </p>
                                <p>
                                    Key technical features include:
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Efficient chunk-based terrain storage</li>
                                    <li>Greedy meshing for optimized rendering</li>
                                    <li>Custom shader implementation for block highlighting</li>
                                    <li>Frustum culling for improved performance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="mt-8 flex gap-4">
                            <a 
                                href="https://github.com/your-repo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-stone-950 hover:text-rose-400 transition-colors"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MinecraftProject; 