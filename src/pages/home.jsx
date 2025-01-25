import React, { useState, useEffect, useRef } from 'react';
import homeImage from '../assets/home.webp';


const Home = () => {
    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState('16px'); 
    const imageRef = useRef(null);
    const animationRef = useRef(null);
    const isAnimatingRef = useRef(true); // Persist animation state
    const fullText = 'Hello!\nWelcome to\nmy site!\n(〜￣▽￣)〜';
    const fullText2 = 'I\'m Perrie, \nsoftware\nengineer &\nillustrator';

    useEffect(() => {
        const typeText = async (textToType) => {
            setText(''); // Clear the text before typing
            for (let i = 0; i < textToType.length; i++) {
                if (!isAnimatingRef.current) return; // Check if animation should stop
                await new Promise((resolve) => {
                    animationRef.current = setTimeout(() => {
                        setText((prev) => prev + textToType[i]);
                        resolve();
                    }, 60);
                });
            }
            await new Promise((resolve) => {
                animationRef.current = setTimeout(resolve, 800); // Pause before switching text
            });
        };

        const animateTexts = async () => {
            while (isAnimatingRef.current) {
                await typeText(fullText);
                if (!isAnimatingRef.current) break;
                await typeText(fullText2);
            }
        };

        isAnimatingRef.current = true; // Ensure animation starts fresh
        animateTexts();

        return () => {
            isAnimatingRef.current = false; // Stop animation on cleanup
            if (animationRef.current) clearTimeout(animationRef.current);
        };
    }, [fullText, fullText2]);

    useEffect(() => {
        const updateFontSizeAndPosition = () => {
            if (imageRef.current) {
                const imageWidth = imageRef.current.offsetWidth;
                // Adjust font size based on image scale
                const scale = window.innerWidth < 640 ? 1.8 : // mobile
                            window.innerWidth < 768 ? 1.25 : // sm
                            window.innerWidth < 1024 ? 1.2 : // md
                            1; // lg
                const newFontSize = imageWidth * 0.027 * scale;
                setFontSize(`${newFontSize}px`);
            }
        };

        updateFontSizeAndPosition();
        window.addEventListener('resize', updateFontSizeAndPosition);

        return () => {
            window.removeEventListener('resize', updateFontSizeAndPosition);
        };
    }, []);

    return (
        <div className="px-4 py-8 sm:py-16">
            <div 
                style={{ backgroundColor: '#f1df7e' }} 
                className="relative border-stone-950 border-4 rounded-lg w-full max-w-[80vw] h-[65vh] sm:h-[70vh] max-h-[95vh] mx-auto"
            >
                <div className="absolute inset-0 sm:overflow-y-clip flex items-center justify-center">
                    <div className="relative w-full md:w-[80%]">
                        <img 
                            ref={imageRef}
                            src={homeImage}
                            alt="Home" 
                            className="w-full h-full max-h-full object-contain scale-[180%] sm:scale-125 md:scale-120 lg:scale-100"
                            style={{
                                clipPath: 'inset(0 -100vw 0 -100vw)',
                                maxWidth: 'unset'
                            }}
                        />
                        {/* <div 
                            className="absolute top-[46%] left-[41%] sm:left-[51%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-8.5deg] scale-[110%] sm:scale-125 md:scale-120 lg:scale-100"
                        >
                            <p 
                                className="font-title uppercase text-emerald-500 typing-text whitespace-pre-line text-left leading-[1.3] h-[6em]"
                                style={{ fontSize }}
                            >
                                {text}
                            </p>
                        </div> */}
                        <div 
                            className="absolute top-[42%] sm:top-[45%] md:top-[45%] left-[63%] sm:left-[60%] md:left-[59%] lg:left-[56%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-8.5deg] scale-[107%] sm:scale-[108%] md:scale-[110%] lg:scale-[104%]"
                        >
                            <p 
                                className="font-title uppercase text-emerald-500 typing-text whitespace-pre-line text-left leading-[1.3] h-[6em]"
                                style={{ fontSize, width: '15em' }} // Set a fixed width
                            >
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
