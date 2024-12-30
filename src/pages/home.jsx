import React, { useState, useEffect, useRef } from 'react';
import homeImage from '../assets/home.png';

const Home = () => {
    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState('16px'); 
    const imageRef = useRef(null);
    const fullText = 'Hello!\nWelcome to\nmy site!\n(〜￣▽￣)〜';

    useEffect(() => {
        let timeoutId = null;

        // typing animated effect
        const typeText = async () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            setText('');
            const typeChar = (index) => {
                return new Promise(resolve => {
                    timeoutId = setTimeout(() => {
                        setText((currentText) => currentText + fullText[index]);
                        resolve();
                    }, 70);
                });
            };

            for (let i = 0; i < fullText.length; i++) {
                await typeChar(i);
            }

            timeoutId = setTimeout(typeText, 2000);
        };

        typeText();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    useEffect(() => {
        const updateFontSize = () => {
            if (imageRef.current) {
                const imageWidth = imageRef.current.offsetWidth;
                const newFontSize = imageWidth * 0.028; // 5% of the image width
                setFontSize(`${newFontSize}px`);
            }
        };
        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, []);

    return (
        <div className="px-4 py-12">
            <div style={{ backgroundColor: '#f1df7e' }} className=" border-stone-950 border-4 rounded-lg min-h-[75vh] w-full max-h-[85vh] flex flex-col items-center justify-center p-8">
                <div className="relative flex flex-col items-center">
                    <img 
                        ref={imageRef}
                        src={homeImage} 
                        alt="Home" 
                        className="max-w-[80%] h-auto mr-8"
                    />
                    <div 
                        className="absolute top-[46%] left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-8.5deg] w-[30%]"
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
