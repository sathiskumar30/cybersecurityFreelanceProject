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
import GlitchText from '@/components/ui/ReactBits/GlitchEffect';
import TrueFocus from '@/components/ui/ReactBits/TrueFocus';
import I6LandingPage from './ServicesPage';
import { ScrollTrigger } from 'gsap/all';
import Carousel from '@/components/ui/ReactBits/Carousal';
import { Section } from 'lucide-react';
import CardSwap, { Card } from '@/components/ui/ReactBits/CardSwap';
import ScrollVelocity from '@/components/ui/ReactBits/ScrollVelocity';
import InfiniteMenu from '@/components/ui/ReactBits/InfiniteMenu';
import RollingGallery from '@/components/ui/ReactBits/RollingGallery';
import CircularGallery from '@/components/ui/ReactBits/CircularGallery';
import FooterLight from '@/components/FooterLight';
import InfiniteScroll from '@/components/ui/ReactBits/infiniteScroll';
import Lottie from 'lottie-react';
import lottieAnimationObject from '../../components/ui/Assistant-Bot.json';
import LightRays from '@/components/ui/ReactBits/LightRay';

gsap.registerPlugin(ScrollTrigger);


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

    gsap.to('.box', {
        scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
        x: 500
    });

    const items = [
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://google.com/',
            title: 'Item 1',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/400/400?grayscale',
            link: 'https://google.com/',
            title: 'Item 2',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/500/500?grayscale',
            link: 'https://google.com/',
            title: 'Item 3',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/600/600?grayscale',
            link: 'https://google.com/',
            title: 'Item 4',
            description: 'This is pretty cool, right?'
        }
    ];


    const itemsAgain = [
        { content: "Text Item 1" },
        { content: <p>Paragraph Item 2</p> },
        { content: "Text Item 3" },
        { content: <p>Paragraph Item 4</p> },
        { content: "Text Item 5" },
        { content: <p>Paragraph Item 6</p> },
        { content: "Text Item 7" },
        { content: <p>Paragraph Item 8</p> },
        { content: "Text Item 9" },
        { content: <p>Paragraph Item 10</p> },
        { content: "Text Item 11" },
        { content: <p>Paragraph Item 12</p> },
        { content: "Text Item 13" },
        { content: <p>Paragraph Item 14</p> },
    ];
    return (

        <div className="w-full bg-gray-0 text-gray-800">

            {/* // Frist Section Start */}

            <section
                ref={sectionRef}
                className="bg-inherit relative w-full h-screen overflow-hidden flex items-center justify-center"
            >

                {/* <Spline
                    scene='https://my.spline.design/nexbotrobotcharacterconcept-jmlT2gO0EiVvU6OnjQnpOcmw/'
                /> */}

                <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-jmlT2gO0EiVvU6OnjQnpOcmw/' frameborder='0' width='100%' height='100%'></iframe>


                <div className="absolute left-10 bottom-30 z-10 text-left">

                    <p className="text-7xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                        We are
                    </p>
                    <p className="text-7xl font-bold leading-[1.1] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                        Defeneders
                    </p>

                    {/* <GlitchText
                        speed={2}
                        enableShadows={true}
                        enableOnHover={false}
                        className='custom-class'
                    >
                        the Digital Future
                    </GlitchText> */}

                </div>



                <div className="absolute right-8 bottom-15 z-10">


                    <TrueFocus
                        sentence="Innovation Unlocked"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="red"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />

                    <TrueFocus
                        sentence=" By AI"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="red"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>


            </section>

            {/* 
            // Frist Section End


            // Second Section Start */}

            <section
                className='bg-[#e3e3e3] relative pt-5'
            >

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 pointer-events-none z-10"
                    style={{
                        height: '56px',
                        background:
                            'linear-gradient(to bottom, #e3e3e3 0%, rgba(227,227,227,0.6) 35%, transparent 100%)',
                        // boxShadow: '0 -12px 30px -10px rgba(0,0,0,0.18)',
                    }}
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 pointer-events-none z-10"
                    style={{
                        height: '0px',
                        boxShadow: '0 -14px 34px -10px rgba(0,0,0,0.25)',
                    }}
                />

                {/* 
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 pointer-events-none z-10"
                    style={{
                        height: '56px',
                        background:
                            'linear-gradient(to bottom, #e3e3e3 0%, rgba(227,227,227,0.75) 35%, transparent 100%)',
                        boxShadow: '0 -14px 34px -10px rgba(0,0,0,0.25)',
                    }}
                /> */}

                <ScrollVelocity
                    texts={['L1 SOC', 'CEH']}
                    velocity={100}
                    className="custom-scroll-text"
                />




            </section>

            {/* 
            // Second Section End

            // Third Section Start */}


            {/* <section>


                <div style={{ height: '600px', position: 'relative' }}>
                    <InfiniteMenu items={items} />
                </div>



            </section> */}

            {/* 
            // Third Section End

            //Fourth Section Start */}

            <section
                className='w-full bg-[#e3e3e3]'
            >
                {/* <RollingGallery autoplay={false} pauseOnHover={true} /> */}
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                </div>
            </section>

            {/* 
            //Fourth Section End 

            //Fiveth Section Start */}

            <section>

            </section>
            {/* 
            //Fiveth Section End 

            //Sixth Section Start */}


            <section
                className='bg-[#e3e3e3]'
            >
                <div style={{ height: '500px', position: 'relative' }}>
                    <InfiniteScroll
                        items={itemsAgain}
                        isTilted={true}
                        tiltDirection='left'
                        autoplay={true}
                        autoplaySpeed={10}
                        autoplayDirection="down"
                        pauseOnHover={true}
                    />
                </div>
            </section>


            <section
                className='flex flex-row gap-2 bg-[#e3e3e3]'
            >

                <Lottie style={{ }} animationData={lottieAnimationObject} loop={true} autoplay={true} />

                {/* <Carousel
                    baseWidth={window.innerWidth / 2}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                /> */}

                <Carousel
                    baseWidth={window.innerWidth / 2}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />

            </section>

            {/* Six section end */}


            {/* Seventh section start */}

            <section>

                <div style={{ height: '600px', position: 'relative' }}>
                    <InfiniteMenu items={items} />
                </div>

            </section>

            {/* Seventh section End */}



            {/* Footer Section Start */}

            <FooterLight />

            {/* Footer Section End */}


        </div>
    );
}





// <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 text-gray-800">
// <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-cyan-50 to-purple-50 text-gray-800">
// {/* <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-cyan-50 to-purple-50 text-gray-800"> */}


{/* <GlitchText
                        speed={2}
                        enableShadows={true}
                        enableOnHover={false}
                        className='custom-class'
                    >
                        the Digital Future
                    </GlitchText> */}


{/* Right-side 3D shield */ }
{/* <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 w-[320px] h-[420px] md:w-[420px] md:h-[520px] z-10">
                    <ShieldCanvas />
                </div> */}



{/* 
            <section
                className='flex flex-row gap-4 '
            > */}

{/* <Carousel
                    baseWidth={window.innerWidth/2}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />

                <Carousel
                    baseWidth={window.innerWidth/2}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                /> */}

{/* </section> */ }


{/* <section
                className='w-full'
            > */}

{/* <div>
                    Sathis Kumar Sathis kumar Sathis kumar 
                </div> */}





{/* </section> */ }
