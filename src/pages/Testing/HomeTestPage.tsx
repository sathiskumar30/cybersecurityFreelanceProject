'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from '@/components/ui/ReactBits/SplitText';
import GlareHover from '@/components/ui/ReactBits/GlareEffect';
import ShinyText from '@/components/ui/ReactBits/ShinyTextEffect';
import StarBorder from '@/components/ui/ReactBits/Starbordereffect';
// import Web3Background from '@/components/ui/ReactBits/Web3Background';
import ShieldCanvas from '@/components/ui/ReactBits/ShieldCanvas';
import Spline from '@splinetool/react-spline';


export default function Home() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const ShinetextRef = useRef<HTMLParagraphElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);



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

    useEffect(() => {
        if (shineRef.current) {
            gsap.fromTo(
                shineRef.current,
                { x: "-150%" },
                {
                    x: "150%",
                    duration: 2,
                    ease: "power1.inOut",
                    repeat: -1,
                    repeatDelay: 1
                }
            );
        }
    }, []);

    return (
        // <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 text-gray-800">
        // <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-cyan-50 to-purple-50 text-gray-800">

        // <div className="w-full bg-gray-0 text-gray-800">
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-cyan-50 to-purple-50 text-gray-800">

            <section
                ref={sectionRef}
                className="bg-inherit relative w-full h-screen overflow-hidden flex items-center justify-center"
            >

                {/* <Spline
                    scene='https://my.spline.design/nexbotrobotcharacterconcept-jmlT2gO0EiVvU6OnjQnpOcmw/'
                /> */}

                <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-jmlT2gO0EiVvU6OnjQnpOcmw/' frameborder='0' width='100%' height='100%'></iframe>

                {/* 3D background removed; we render a single 3D object at right */}
                {/* Background removed per request */}


                <div className="absolute z-10 text-center">
                    {/* <p className="text-8xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700">
                        We
                    </p>
                    <p className="text-8xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">
                        Secure You
                    </p>
                    <p className="text-8xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">
                        From Digital World
                    </p> */}

                    <p className="text-7xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                        We are
                    </p>
                    <p className="text-7xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                        Defeneder of
                    </p>
                    <p className="text-7xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                        the Digital Future
                    </p>


                    <p className='text-left text-lg text-red-600 max-w-xl mx'>
                        Leveraging AI precision, fortifying Web3 ecosystems, and safeguarding emerging technologies — delivering trusted protection for the next generation of digital innovation. From decentralized finance to advanced cloud infrastructures, we ensure your assets remain resilient, compliant, and future-ready.
                    </p>

                    {/* 
                    <p
                        ref={ShinetextRef}
                        className="text-left text-lg text-gray-600 relative z-10"
                    >
                        Leveraging AI precision, fortifying Web3 ecosystems, and safeguarding emerging technologies — delivering trusted protection for the next generation of digital innovation. From decentralized finance to advanced cloud infrastructures, we ensure your assets remain resilient, compliant, and future-ready.
                    </p> */}

                    {/* <div ref={shineRef} className="absolute top-0 left-0 h-full w-[50%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none" /> */}

                </div>


                {/* <div className="absolute right-8 bottom-15 z-10">
                    <p className="text-8xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700">
                        of the
                    </p>
                    <p className="text-8    xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">
                        Digital Future
                    </p>
                </div>

                <div className="absolute right-8 bottom-15 z-10">
                      <p className='text-left text-lg text-gray-600 max-w-xl mx'>
                        Leveraging AI precision, fortifying Web3 ecosystems, and safeguarding emerging technologies — delivering trusted protection for the next generation of digital innovation. From decentralized finance to advanced cloud infrastructures, we ensure your assets remain resilient, compliant, and future-ready.
                    </p>
                </div> */}

                {/* Right-side 3D shield */}
                <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 w-[320px] h-[420px] md:w-[420px] md:h-[520px] z-10">
                    {/* <ShieldCanvas /> */}
                </div>
            </section>
        </div>
    );
}
