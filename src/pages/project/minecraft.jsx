import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { minecraft } from '../../assets/project';

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

            <div className="max-w-5xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Mini Minecraft</h1>
                    <div className="flex flex-wrap gap-1 md:gap-3 text-xs md:text-sm justify-center font-body text-stone-600">
                        <span>C++</span>
                        <span>•</span>
                        <span>OpenGL</span>
                    </div>
                </div>

                {/* Main Image/Video Section */}
                <div className="relative mt-6 flex justify-center">
                    <div className="w-full md:w-[85%] aspect-video">
                    <iframe 
                        
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/Q4AYDLjnAJw?si=0lbrsT9ne0g8qcnI?vq=hd1080p" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    />
                    </div>
                </div>

                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 mt-8 text-black">
                        <p className="text-base font-body mb-6">
                            A mini version of Minecraft built from scratch in a team of 3, using C++ and OpenGL.
                        </p>

                        {/* Features Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-title mb-8">Key Features</h2>
                            
                            {/* Feature 1: Terrain Generation */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
                                <div className="space-y-4 col-span-1 flex flex-col justify-center">
                                    <h3 className="text-xl font-title">Procedural Terrain Generation</h3>
                                    <p className="text-base md:text-left font-body">
                                        I implemented a procedural terrain generation using multiple noise functions (Perlin noise, Voronoi noise, and Fractal noise) and textured the terrain through fragment shaders.
                                        <br/><br/>4 biomes are created: Badlands, Plains, Mountains, and Deserts. 
                                    </p>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 gap-2">
                                    <img src={minecraft.badlands} alt="Badlands" className="w-full h-full object-cover rounded-lg" />
                                    <img src={minecraft.mountains} alt="Mountains" className="w-full h-full object-cover rounded-lg" />
                                    <img src={minecraft.plains} alt="Plains" className="w-full h-full object-cover rounded-lg" />
                                    <img src={minecraft.desert} alt="Deserts" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>

                            {/* Feature 2: Day/Night Cycle */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="order-2 md:order-1">
                                    <div className="aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1048729800?h=56b5972464&autoplay=1&loop=1&controls=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Day / Night Cycle"
                                        ></iframe>
                                    </div>
                                </div>
                                
                                <div className="order-1 md:order-2 space-y-4 flex flex-col justify-center">
                                    <h3 className="text-xl font-title">Dynamic Day/Night Cycle and Sky box</h3>
                                    <p className="text-base md:text-left font-body">
                                        Created a day/night cycle system that transitions through 8 different 
                                        skies. The system includes dynamic block tinting based on time of day and ambient lighting.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3: Procedural Assets */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                                <div className="space-y-4 col-span-2 flex flex-col justify-center">
                                    <h3 className="text-xl font-title">Procedural Clouds and Assets</h3>
                                    <p className="text-base md:text-left font-body ">
                                        Developed a system for procedurally generating assets including clouds, 
                                        trees, flowers, and stars. Each asset type has specific generation rules to ensure appropriate placement and appearance.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 col-span-3 gap-2">
                                    <img src={minecraft.assets} alt="Assets" className="w-full  object-cover rounded-lg " />
                                    <img src={minecraft.cloud} alt="Clouds" className="w-full object-cover rounded-lg " />
                                </div>
                            </div>

                            {/* Feature 4: Post-Processing */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="col-span-2 order-2 md:order-1 grid grid-cols-2 gap-2">
                                    <img src={minecraft.fog} alt="Fog 1" className="w-full h-full object-cover rounded-lg" />
                                    <img src={minecraft.fog2} alt="Fog 2" className="w-full h-full object-cover rounded-lg" />
                                    <img src={minecraft.water} alt="Underwater" className="w-full h-full object-cover rounded-lg " />
                                    <img src={minecraft.lava} alt="Under-Lava" className="w-full h-full object-cover rounded-lg " />
                                </div>
                                <div className="order-1 md:order-2 col-span-1 space-y-4 flex flex-col justify-center">
                                    <h3 className="text-xl font-title"> Post-Process Effects</h3>
                                    <p className="text-base md:text-left font-body">
                                        Implemented various post-processing effects using frame buffers and custom shaders.
                                         <br/> <br/> 
                                        This includes distance fog, underwater shaders, and under-lava shaders.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MinecraftProject; 