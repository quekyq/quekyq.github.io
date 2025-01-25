import photo from '../assets/headshot.webp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const About = () => {
    return (
        <div className=" px-0 md:px-5 py-8 flex flex-col gap-6">
            {/* About Section */}
            <div 
                style={{ backgroundColor: '#c3d488' }} 
                className="rounded-lg border-stone-950 border-4 min-h-[45vh] w-full flex items-center justify-center p-8 overflow-hidden"
            >
                <div className="flex flex-col md:flex-row w-full">
                    {/* Photo container and social links */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
                        <div className="w-[60%] md:w-[90%] max-w-[240px] aspect-square rounded-full overflow-hidden border-stone-950 border-4">
                            <img 
                                src={photo} 
                                alt="Perrie Quek" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-4 mt-4">
                            <a 
                                href="https://github.com/quekyq" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-3xl text-stone-950 hover:text-stone-700 transition-colors"
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href="https://linkedin.com/in/yu-qing-quek/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-3xl text-stone-950 hover:text-stone-700 transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                            <a 
                                href="mailto:quekyuqing@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-3xl text-stone-950 hover:text-stone-700 transition-colors"
                            >
                                <MdEmail />
                            </a>
                        </div>
                    </div>

                    {/* About statement */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center mt-8 md:mt-4 md:mb-4 md:ml-8 md:mr-4">
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className=" font-body text-left md:text-justify text-black leading-relaxed  "
                          >
                            Hi, I&apos;m Perrie! ｡ﾟ(•ᴗ•)*:･ﾟ✧
                            <br/><br/>
                            
                            I&apos;m a <strong>computer science</strong> graduate student pursuing my master&apos;s at the University of Pennsylvania, where I&apos;ve delved deep into topics like <strong>distributed systems</strong>, <strong>computer graphics</strong>, <strong>database systems</strong>, and <strong>algorithms</strong>. I love the problem-solving aspect of programming and finding elegant, creative solutions to tricky challenges.
                            <br/> <br/>

                            I am particularly drawn to the <strong>art & tech</strong> space. My goal is to contribute to projects that <strong>merge technical depth with creativity</strong> to create novel and fun experiences.
                            <br/> <br/>
                            
                            In my free time, I enjoy consuming and creating art, reading, watching TV shows, and daydreaming.
                            <br/> <br/>
                            Thanks for stopping by my portfolio — feel free to reach out!
                        </p>
                    </div>
                </div>
            </div>

            {/* CV Section */}
            {/* Education */}
            <div 
                style={{ backgroundColor: '#E4DE94' }} 
                className="rounded-lg border-stone-950 border-4 w-full p-8"
            >
                <h2 className="font-title text-2xl mb-4 text-stone-950 border-b-2 border-stone-950 pb-2">
                    Education
                </h2>
                <div className="space-y-4 grid md:grid-cols-2 md:gap-8 ">
                    {/* UPenn Info */}
                    <div className='flex flex-col justify-center md:text-right'>
                        <h2 className="font-semibold font-body text-black text-base md:text-lg">University of Pennsylvania</h2>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className=" font-body text-emerald-700">Master of Computer and Information Technology</p>
                        <p className="font-body text-xs text-emerald-700">Aug 2023 - May 2025</p>
                    </div>
                    {/* UPenn Details */}
                    <div className='md:text-left text-sm md:text-base text-black font-body'>
                        <p>GPA: 4.0 / 4.0</p>
                        <p>Relevant coursework:</p>
                        <ul style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }}className="list-disc pl-4 text-sm space-y-1">
                            <li>Distributed Systems</li>
                            <li>Interactive Computer Graphics</li>
                            <li>Database and Information Systems</li>
                            <li>Computer Systems Programming</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Discrete Mathematics</li>
                        </ul>
                    </div>

                    {/* NTU Info */}
                    <div className='flex flex-col justify-center font-body md:text-right'>
                        <h3 className="font-semibold text-base md:text-lg text-black">Nanyang Technological University</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className=" text-emerald-700">Bachelor of Fine Arts in Media Art</p>
                        <p className="text-xs text-emerald-700">Aug 2017 - May 2021</p>
                    </div>
                    {/* NTU Details */}
                    <div className='md:text-left text-black text-sm md:text-base font-body'>
                        <p>GPA: 4.79 / 5.00</p>
                        <p>Achievements:</p>
                        <ul style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className="list-disc pl-4 space-y-1">
                            <li>Winner of the Lee Kuan Yew Gold Medal, 2020/2021</li>
                            <li>Awarded Dean&apos;s List in AY 2017/2018, 2018/2019, 2020/2021</li>
                            <li>Recipient of the NTU-University Scholars Programme Scholarship</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* EXPERIENCE */}
            <div 
                style={{ backgroundColor: '#EED798' }} 
                className="rounded-lg border-stone-950 border-4 w-full p-8"
            >
                <h2 className="font-title text-2xl mb-4 text-stone-950 border-b-2 border-stone-950 pb-2">
                    Experience
                </h2>
                <div className="space-y-4 grid md:grid-cols-3 grid-cols-1 md:gap-8 md:text-right ">
                    <div className='font-body flex flex-col justify-center col-span-1'>
                        <h3 className="font-semibold text-base md:text-lg text-black">Teaching Assistant</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }}className=" text-yellow-700">University Of Pennsylvania</p>
                        <p className="text-xs text-yellow-700">Aug 2024 — Present</p>
                        
                    </div>
                    <div className='col-span-2'>
                        <ul style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className="list-disc font-body pl-4 text-left space-y-1 text-black">
                                <li> TA for <strong>CIS 5950 Computer Systems Programming</strong>, and <strong>CIS 2400 Introduction to Computer Systems</strong></li>
                                <li>Offered academic support to students, hosted weekly office hours, and provided code review in C and C++</li>
                                <li>Developed tests for homework autograder and maintained assignment infrastructure</li>
                        </ul>
                    </div>
                    <div className='font-body flex flex-col justify-center col-span-1'>
                        <h3 className="font-semibold text-base md:text-lg text-black">Research Assistant</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className=" text-yellow-700">
                            <a 
                                href="https://www.aml-penn.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline decoration-1 underline-offset-2 text-red-600 hover:text-emerald-600 transition-colors"
                            >
                                Autonomous Manufacturing Lab
                            </a>
                            {" "}@ UPenn
                        </p>
                        <p className="text-xs text-yellow-700">Jun 2024 — Aug 2024</p>
                        
                    </div>
                    <div className='col-span-2'>
                        <ul style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className="list-disc font-body pl-4 text-left space-y-1 text-sm text-black">
                                <li> Converted a Java-based codebase to C# to facilitate integration with Rhino3D (3D modeling software for architects)</li>
                                <li>Developed custom scripting components to enable dynamic interaction between the simulation software and architectural models in Rhino3D, streamlining workflow efficiency</li>
                                <li>Optimized code by identifying redundancies and reworking inefficient data structures</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* SKILLS */}
            <div 
                style={{ backgroundColor: '#EFCA9A' }} 
                className="rounded-lg border-stone-950 border-4 w-full p-8"
            >
                <h2 className="font-title text-2xl mb-4 text-stone-950 border-b-2 border-stone-950 pb-2">
                    Skills
                </h2>
                <div className=" grid md:grid-cols-4 font-body text-black gap-3 md:gap-0 py-2">
                    <div>
                        <h3 className="font-semibold text-base md:text-lg">Languages</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }} className=" mt-1">C++, Java, C#, C, Python, Javascript</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base md:text-lg">Web Development</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }}className="mt-1">HTML/CSS, React, Node.js, Express, Vite</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base md:text-lg">Database Technologies</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }}className="mt-1">PostgreSQL, MongoDB, Neo4j</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base md:text-lg">Tools</h3>
                        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)'  }}className="mt-1">Git, Docker, Pandas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

{/* Technologies/Skills */}
<div>
<h2 className="font-title text-xl mb-4 text-stone-950 border-b-2 border-stone-950 pb-2">
    Skills
</h2>
<div className="space-y-4">
    <div>
        <h3 className="font-bold">Languages</h3>
        <p className="text-sm">JavaScript, Python, Java, C++</p>
    </div>
    <div>
        <h3 className="font-bold">Frontend</h3>
        <p className="text-sm">React, Next.js, Tailwind CSS</p>
    </div>
    <div>
        <h3 className="font-bold">Backend</h3>
        <p className="text-sm">Node.js, Express, PostgreSQL</p>
    </div>
    <div>
        <h3 className="font-bold">Tools</h3>
        <p className="text-sm">Git, Docker, AWS</p>
    </div>
</div>
</div>

export default About;