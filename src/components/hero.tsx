"use client"
import useTypewriter from "react-typewriter-hook"
import {useState, useEffect, useRef} from 'react';

export function Hero(){
    const [texts] = useState<string[]>([
        "Embrace the moment.",
        "Seize the opportunity.",
        "Make memories.",
        "Cherish the experience.",
        "Treasure the journey."
    ]);
    const [index,setIndex] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout|null>(null);
    useEffect(() =>{
        intervalRef.current = setInterval(() =>{
            setIndex(prevIndex => (prevIndex +1) % texts.length)
        },7000)
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    },[texts])
    const text = useTypewriter(texts[index]!);

    return(
        <div className="flex justify-center items-center w-full mt-24">
            <div className="flex justify-between items-center w-[90%] px-24">
                <div>
                    <h1 className="font-black text-5xl w-80 text-right order-1">{text}</h1>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="w-[60%] order-2 rounded-3xl"
                >
                    <source src="/parag_final.mp4" type="video/mp4" className="rounded-3xl" />
                </video>
            </div>
        </div>
    );
}