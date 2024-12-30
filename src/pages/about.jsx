import photo from '../assets/headshot.jpg';

const About = () => {
    return (
        <div className="px-4 py-12 flex justify-center">
            <div 
                style={{ backgroundColor: '#c3d488' }} 
                className="rounded-lg border-stone-950 border-4 min-h-[50vh] w-[80vw] flex items-center justify-center p-8 overflow-hidden"
            >
                <div className="flex flex-col md:flex-row w-full">
                    {/* Photo container - full width on mobile, half on desktop */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="w-[60%] md:w-[80%] max-w-[280px] aspect-square rounded-full overflow-hidden border-stone-950 border-4">
                            <img 
                                src={photo} 
                                alt="Perrie Quek" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text content - full width on mobile, half on desktop */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:-ml-12">
                        <p className="font-body text-justify text-black leading-relaxed md:pr-8"
                           style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}>
                            Hi, I'm Perrie! I'm a software engineer with a strong interest in the art and tech space.
                            
                            I am currently pursuing my Master's in Computer 
                            and Information Technology at the University of Pennsylvania.
                            <br/> <br/>

                            I am passionate about . I enjoy solving complex problems.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;