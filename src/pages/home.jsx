import React, { useState, useEffect, useRef } from 'react';
import homeImage from '../assets/home.webp';

const Home = () => {
    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState('16px'); 
    const imageRef = useRef(null);
    const fullText = 'Hello!\nWelcome to\nmy site!\n(〜￣▽￣)〜';
    const fullText2 = 'I\'m Perrie, \nsoftware\nengineer &\nillustrator';

    useEffect(() => {
        let timeoutId = null;

        // Typing animated effect
        const typeText = async (textToType) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            setText('');
            
            // Type each character
            for (let i = 0; i < textToType.length; i++) {
                await new Promise(resolve => {
                    timeoutId = setTimeout(() => {
                        setText(current => current + textToType[i]);
                        resolve();
                    }, 65);
                });
            }

            // Wait before clearing
            await new Promise(resolve => {
                timeoutId = setTimeout(resolve, 1500);
            });
        };

        // Alternate between texts
        const animateTexts = async () => {
            while (true) {
                await typeText(fullText);
                await typeText(fullText2);
            }
        };

        animateTexts();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    useEffect(() => {
        const updateFontSizeAndPosition = () => {
            if (imageRef.current) {
                const imageWidth = imageRef.current.offsetWidth;
                const newFontSize = imageWidth * 0.027;
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
        <div className="px-4 py-8">
            <div 
                style={{ backgroundColor: '#f1df7e' }} 
                className="border-stone-950 border-4 rounded-lg min-h-[25vh] w-full max-h-[85vh] flex flex-col items-center justify-center p-8"
            >
                <div className="relative w-full md:max-w-[80%]">
                    <img 
                        ref={imageRef}
                        src={homeImage} 
                        alt="Home" 
                    />
                    <div 
                        className="absolute top-[46%] left-[50.5%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-8.5deg] w-[30%]"
                        style={{ fontSize }}
                    >
                        <div className="h-[6em] flex flex-col justify-start">
                            <p 
                                className="font-title uppercase text-emerald-500 typing-text whitespace-pre-line text-left leading-[1.3]"
                                style={{ fontSize }}
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
