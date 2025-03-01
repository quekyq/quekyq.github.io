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

            <div className="max-w-5xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-title mb-4 text-stone-950">Chartify</h1>
                    <div className="flex flex-wrap gap-1 md:gap-3 justify-center text-xs md:text-sm font-body text-stone-600">
                        <span>PostgreSQL</span>
                        <span>•</span>
                        <span>Python</span>
                        <span>•</span>
                        <span>Vite</span>
                        <span>•</span>
                        <span>React.js</span>
                        <span>•</span>
                        <span>Node.js</span>
                        <span>•</span>
                        <span>Express.js</span>
                        <span>•</span>
                        <span>Tailwind CSS</span>
                        <span>•</span>
                        <span>Shadcn UI</span>
                    </div>
                        <div className="font-body mt-3">
                            <a 
                                href="https://github.com/quekyq/Chartify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-slate-950 text-slate-950 hover:text-rose-400 hover:border-rose-400 transition-colors rounded-lg px-2 mx-1 text-sm"
                            >
                                View on GitHub
                            </a>
                        </div>
                </div>

                {/* Main Image/Video Section */}
                <div className="relative mt-6 flex justify-center">
                    <div className="w-full md:w-[85%] aspect-video">
                    <iframe 
                        className="w-full h-full" 
                        src="https://www.youtube.com/embed/kV12iIxmCQA?si=U9Twp4nUri8on4r8?vq=hd1080p" 
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
                        Chartify is a web application that delivers music trend analytics through interactive data visualizations. Built with a <strong>relational PostgreSQL database</strong>, it integrates datasets from Spotify, Kaggle, and lyrics retrieved via the LRCLIB API. 
                        <br/><br/>
                        The project involved <strong>data wrangling and preprocessing</strong> in Python, <strong>designing and optimizing SQL queries</strong>, and building <strong>a user-friendly and intuitive web application.</strong>      
                        </p>

                        {/* Features Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-title mb-8">Key Features</h2>
                            {/* Feature 1: Trends */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="order-2 md:order-2 md:col-span-2 aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1048797460?h=a249112e49&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Trends"
                                        ></iframe>
                                    </div>
                                <div className="order-1 md:order-1 col-span-1 space-y-4 flex flex-col justify-center">
                                    <h3 className="text-xl font-title text-center md:text-left">Song Trends</h3>
                                    <p className="text-base text-center md:text-left font-body">
                                        <strong>Interactive line graph</strong> visualizes how song attributes like tempo and energy have evolved over the past decade, with <strong>genre-specific breakdowns</strong>.
                                        <br/> <br/> 
                                        Users can also explore attribute correlations through an <strong>interactive scatter graph.</strong>
                                    </p>
                                </div>
                            </div>
                            
                            {/* Feature 2: Explore Songs */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="order-1 md:order-2 space-y-4 col-span-1 flex flex-col justify-center">
                                    <h3 className="text-xl font-title text-center md:text-left">Explore Songs</h3>
                                    <p className="text-base text-center md:text-left font-body">
                                        Users can discover top performing <strong>songs</strong> and <strong>genres</strong>, filtered by time and region. 
                                        <br/><br/>
                                        A <strong>search and autocomplete functionality</strong> allows users to dive into a specific song&apos;s week-by-week charting history, global performance metrics, and detailed song attributes.
                                    </p>
                                </div>
                                <div className="order-2 md:order-1 md:col-span-2 aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1048794708?h=c662b96571&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Songs"
                                        ></iframe>
                                    </div>
                            </div>

                            

                            {/* Feature 3: Lyrics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="order-1 md:order-1 space-y-4 col-span-1 flex flex-col justify-center">
                                    <h3 className="text-xl font-title text-center md:text-left">Explore Lyrics</h3>
                                    <p className="text-base text-center md:text-left font-body">
                                        By <strong>extracting n-grams</strong> (frequent phrases) from song lyrics through <strong>text-processing</strong>, this feature provides lyrical trend analysis.
                                        <br/><br/>
                                        Users can filter results by explicit content, time, and region to uncover insights into lyrical themes over time.
                                    </p>
                                </div>
                                <div className="order-2 md:order-2 md:col-span-2 aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1048796942?h=31f28b996d&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Lyrics"
                                        ></iframe>
                                    </div>
                            </div>

                            {/* Feature 4: Explore Artist */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="order-2 md:order-1 md:col-span-2 aspect-video w-full">
                                        <iframe 
                                            src="https://player.vimeo.com/video/1048796716?h=7b3254abfe&autoplay=1&loop=1&controls=0&autopause=0&muted=1" 
                                            className="w-full h-full rounded-lg"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                            title="Artists"
                                        ></iframe>
                                    </div>
                                
                                <div className="order-1 md:order-2 space-y-4 flex flex-col justify-center">
                                    <h3 className="text-xl font-title text-center md:text-left">Explore Artists</h3>
                                    <p className="text-base text-center md:text-left font-body">
                                        Users can explore top-performing artists, their charting statistics, and their most successful tracks based on time and region.
                                        <br/><br/>
                                        For individual artists, users can search and explore their charting history, performance data, and lyrical patterns.
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

export default ChartifyProject;
