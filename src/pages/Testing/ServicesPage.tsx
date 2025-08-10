// i6LandingPage.jsx
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollReveal from "@/components/ui/ReactBits/ScrollReavel";
import CardSwap, { Card } from "@/components/ui/ReactBits/CardSwap";

export default function I6LandingPage() {
    useEffect(() => {
        gsap.from(".gsap-fade-in", {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });
        gsap.from(".gsap-cta", {
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            delay: 1.1,
            ease: "elastic.out(1,0.5)"
        });
        gsap.from(".gsap-hero", {
            opacity: 0,
            y: -24,
            duration: 1,
            ease: "power2.out"
        });
    }, []);

    return (
        // <div className="bg-[#e3e3e3] min-h-screen flex flex-col items-center px-4 py-12">
        //     {/* Hero Section */}
        //     <h1 className="gsap-hero text-5xl md:text-6xl font-poppins font-bold text-[#0A192F] mb-8 text-center tracking-tight drop-shadow-lg">
        //         i6 Security Solutions
        //     </h1>


        //     <ScrollReveal
        //         baseOpacity={0}
        //         enableBlur={true}
        //         baseRotation={5}
        //         blurStrength={20}
        //     >
        //         When does a man die? When he is hit by a bullet? No! When he suffers a disease?
        //         No! When he ate a soup made out of a poisonous mushroom?
        //         No! A man dies when he is forgotten!
        //     </ScrollReveal>

        //     {/* STRATEGY Section */}
        //     {/* <section
        //         className="gsap-fade-in w-full max-w-3xl bg-white/85 rounded-2xl shadow-[0_12px_32px_0_rgba(100,255,218,0.15)] mb-12 p-8 backdrop-blur-md"
        //     >
        //         <h2 className="text-2xl text-[#1DE9B6] font-poppins uppercase tracking-wider mb-4">
        //             i6 Strategy
        //         </h2>
        //         <ul className="space-y-3 text-[#0A192F] text-lg font-inter list-disc pl-5">
        //             <li>Ensure security for your Cyber Eco System</li>
        //             <li>Guidance to achieve Cyber Assurance Framework</li>
        //             <li>Strengthen IT Environment Security Policies</li>
        //             <li>Implement Cyber Security Best Practices across branches &amp; departments</li>
        //             <li>Monitor cyber attacks &amp; mitigate adversary impact</li>
        //             <li>Proactive support to achieve business objectives &amp; goals</li>
        //         </ul>
        //     </section>

        //     <section
        //         className="gsap-fade-in w-full max-w-3xl bg-white/85 rounded-2xl shadow-[0_12px_32px_0_rgba(29,233,182,0.12)] p-8 backdrop-blur-md"
        //     >
        //         <h2 className="text-2xl text-[#64FFDA] font-poppins uppercase tracking-wider mb-4">
        //             i6 Client Strategy
        //         </h2>
        //         <ul className="space-y-3 text-[#0A192F] text-lg font-inter list-disc pl-5">
        //             <li>In-depth analysis of your organization</li>
        //             <li>Identify current security posture</li>
        //             <li>Evaluate deployed security controls</li>
        //             <li>Provide actionable views on security risks and strategies</li>
        //             <li>Suggest critical Information Security projects</li>
        //             <li>Drive projects efficiently and on schedule</li>
        //             <li>Roadmap for your future security improvements</li>
        //         </ul>
        //     </section> */}

        //     {/* CTA Button */}
        //     <button className="gsap-cta mt-16 px-8 py-4 font-poppins rounded-xl bg-[#64FFDA] hover:bg-[#1DE9B6] text-[#0A192F] text-xl shadow-lg duration-200">
        //         Book a Consultation
        //     </button>
        // </div>

        <div style={{ height: '200px', position: 'relative' }}>

            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
            >
                <Card>
                    {/* <img style={{ objectFit: 'fill' }} src='https://m.media-amazon.com/images/I/71qb1LEtHdL._UF1000,1000_QL80_.jpg' /> */}
                </Card>
                <Card>
                    {/* <img style={{ objectFit: 'fill' }} src='https://m.media-amazon.com/images/I/71qb1LEtHdL._UF1000,1000_QL80_.jpg' /> */}
                </Card>
                <Card>
                    {/* <img style={{ objectFit: 'fill' }} src='https://m.media-amazon.com/images/I/71qb1LEtHdL._UF1000,1000_QL80_.jpg' /> */}
                </Card>
            </CardSwap>

        </div>
    );
}
