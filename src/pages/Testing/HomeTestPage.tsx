'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);


    useLayoutEffect(() => {
        if (textRef.current) {
            const texts = textRef.current.querySelectorAll('p');
            gsap.from(texts, {
                opacity: 0,
                y: 80,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
    
            // Gradient animation
            gsap.to(texts, {
                backgroundPosition: '200% 0%',
                duration: 10,
                repeat: -1,
                ease: 'linear'
            });
        }
    }, []);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                }
            );
        }
    }, []);

    return (
        // <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 text-gray-800">
        // <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-cyan-50 to-purple-50 text-gray-800">
        <div className="w-full min-h-screen bg text-gray-800">
            <section
                ref={sectionRef}
                className="relative w-full h-screen overflow-hidden flex items-center justify-center"
            >
                {/* Background Cyber Grid */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(90deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_20px)]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/30 to-cyan-200/20 backdrop-blur-sm" />
                </div>
                {/* <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(90deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_20px)]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-100/30 to-cyan-200/20 backdrop-blur-sm" />
                </div> */}

                {/* Foreground Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-600 drop-shadow">
                        Elevating Cybersecurity
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                        AI-Powered Protection for the Next Generation of Digital Threats.
                    </p>
                </div>
                {/* <div className="absolute left-8 bottom-8 z-10">
                    <p className="text-9xl font-bold text-white">
                        We
                    </p>
                    <p className="text-9xl font-bold text-5fa8d3">
                        Guard Your
                    </p>
                    <p className="text-9xl font-bold text-white">
                        Digital World
                    </p>
                </div> */}
                <div  ref={textRef} className="absolute left-8 bottom-8 z-10">
                    <p className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700">
                        We
                    </p>
                    <p className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">
                        Guard Your
                    </p>
                    <p className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-700">
                        Digital World
                    </p>
                </div>
            </section>
        </div>
    );
}
