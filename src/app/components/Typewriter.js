"use client"

import React from 'react'

export default function Typewriter({text, speed}){
    const [displayedText, setDisplayedText] = React.useState('');


    React.useEffect(() => {
        if (text.length === 0) return;

        const handle = setInterval(() => {
            setDisplayedText((prev) => {
                const nextCharIndex = prev.length;
                if (nextCharIndex === text.length) {
                    clearInterval(handle); 
                    return prev;
                }
                return text.substring(0, nextCharIndex + 1);
            });
        }, speed);

        return () => clearInterval(handle); 
    }, [text, speed]); 

    return <h1>{displayedText}</h1>;
}

