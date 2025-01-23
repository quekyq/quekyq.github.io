import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { postshaders } from '../../assets/project';

function PostShadersProject() {
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
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Surface and Post-Processing Shaders</h1>
                    <div className="flex flex-wrap gap-3 justify-center text-sm font-body text-stone-600">
                        <span>C++</span>
                        <span>•</span>
                        <span>OpenGL</span>
                    </div>
                </div>

                {/* Project Description */}
                <div className="prose prose-stone max-w-none">
                    <div className="mb-12 text-black">
                        <p className="text-base font-body mb-6">
                            I wrote various surface and post-processing programs shaders that work on 3D models. These include a <strong>Blinn-Phong reflection</strong> shader for realistic lighting, a <strong>Sobel filter</strong> shader for edge detection, a <strong>Gaussian blur filter</strong> for smoothing effects, and <strong>creative shaders</strong> like a CRT-TV filter, underwater shader, and a matcap shader.    
                        </p>

                        {/* Shaders Section */}
                        <div className="mt-12 pt-12 border-t-2 border-t-stone-400">
                            {/* <h2 className="text-2xl font-title mb-8">Individual Shaders</h2> */}
                            {/* Shader 1: Pattern */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Sobel Filter</h3>
                                    <img src={postshaders.sobel} alt="Sobel" className="w-full h-[calc(100%-2rem)] object-cover rounded-lg" />
                                </div>
                               
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Mosaic Effect</h3>
                                    <img src={postshaders.mosaic} alt="Mosaic" className="w-full h-[calc(100%-2rem)] object-cover rounded-lg" />
                                </div>
                                 
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Matcap Shader</h3>
                                    <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden rounded-lg">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049558120?h=6bec4380af&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Matcap Shader"
                                        ></iframe>
                                    </div>
                                </div>
                                 
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">CRT-TV Filter</h3>
                                    <img src={postshaders.crt} alt="CRT-TV" className="w-full h-[calc(100%-2rem)] object-cover rounded-lg" />
                                </div>
                                 
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Underwater Shader</h3>
                                    <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden rounded-lg">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049560881?h=f136e719e6&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Underwater Shader"
                                        ></iframe>
                                    </div>
                                </div>
                                
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Pixelization Filter</h3>
                                    <img src={postshaders.pixel} alt="Pixelization" className="w-full h-[calc(100%-2rem)] object-cover rounded-lg" />
                                </div>

                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Blinn Phong Reflection</h3>
                                    <img src={postshaders.blinnphong} alt="Blinn Phong" className="w-full h-[calc(100%-2rem)] object-cover rounded-lg" />
                                </div>

                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Vertex Deformation</h3>
                                    <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden rounded-lg">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1049768069?h=70da2d11af&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Underwater Shader"
                                        ></iframe>
                                    </div>
                                </div>
                                
                                <div className="h-[300px]">
                                    <h3 className="text-xl font-title mb-4">Gaussian Blur Filter</h3>
                                    <img src={postshaders.blur} alt="Gaussian Blur" className="w-full h-[calc(100%-2rem)] object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>

                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default PostShadersProject;
