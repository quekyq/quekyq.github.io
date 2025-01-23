import React, { useState, useEffect, useRef } from 'react';
import homeImage from '../assets/home.webp';

const Home = () => {
    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState('16px'); 
    const imageRef = useRef(null);
    const animationRef = useRef(null);
    const fullText = 'Hello!\nWelcome to\nmy site!\n(〜￣▽￣)〜';
    const fullText2 = 'I\'m Perrie, \nsoftware\nengineer &\nillustrator';

    useEffect(() => {
        let isAnimating = true;

        const typeText = async (textToType) => {
            if (!isAnimating) return;
            
            setText('');
            for (let i = 0; i < textToType.length; i++) {
                if (!isAnimating) return;
                await new Promise(resolve => {
                    animationRef.current = setTimeout(() => {
                        setText(prev => prev + textToType[i]);
                        resolve();
                    }, 60);
                });
            }
            
            if (!isAnimating) return;
            await new Promise(resolve => {
                animationRef.current = setTimeout(resolve, 800);
            });
        };

        const animateTexts = async () => {
            while (isAnimating) {
                await typeText(fullText);
                if (!isAnimating) break;
                await typeText(fullText2);
            }
        };

        // Start animation immediately
        setText(fullText[0]);
        animateTexts();

        return () => {
            isAnimating = false;
            if (animationRef.current) {
                clearTimeout(animationRef.current);
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
