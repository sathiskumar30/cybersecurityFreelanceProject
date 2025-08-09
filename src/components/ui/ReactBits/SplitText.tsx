// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText as GSAPSplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

// export interface SplitTextProps {
//     text: string;
//     className?: string;
//     delay?: number;
//     duration?: number;
//     ease?: string | ((t: number) => number);
//     splitType?: "chars" | "words" | "lines" | "words, chars";
//     from?: gsap.TweenVars;
//     to?: gsap.TweenVars;
//     threshold?: number;
//     rootMargin?: string;
//     textAlign?: React.CSSProperties["textAlign"];
//     onLetterAnimationComplete?: () => void;
// }

// const SplitText: React.FC<SplitTextProps> = ({
//     text,
//     className = "",
//     delay = 100,
//     duration = 0.6,
//     ease = "power3.out",
//     splitType = "chars",
//     from = { opacity: 0, y: 40 },
//     to = { opacity: 1, y: 0 },
//     threshold = 0.1,
//     rootMargin = "-100px",
//     textAlign = "center",
//     onLetterAnimationComplete,
// }) => {
//     const ref = useRef<HTMLParagraphElement>(null);
//     const animationCompletedRef = useRef(false);
//     const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//     useEffect(() => {
//         if (typeof window === "undefined" || !ref.current || !text) return;

//         const el = ref.current;

//         animationCompletedRef.current = false;

//         const absoluteLines = splitType === "lines";
//         if (absoluteLines) el.style.position = "relative";

//         let splitter: GSAPSplitText;
//         try {
//             splitter = new GSAPSplitText(el, {
//                 type: splitType,
//                 absolute: absoluteLines,
//                 linesClass: "split-line",
//             });
//         } catch (error) {
//             console.error("Failed to create SplitText:", error);
//             return;
//         }

//         let targets: Element[];
//         switch (splitType) {
//             case "lines":
//                 targets = splitter.lines;
//                 break;
//             case "words":
//                 targets = splitter.words;
//                 break;
//             case "chars":
//                 targets = splitter.chars;
//                 break;
//             default:
//                 targets = splitter.chars;
//         }

//         if (!targets || targets.length === 0) {
//             console.warn("No targets found for SplitText animation");
//             splitter.revert();
//             return;
//         }

//         targets.forEach((t) => {
//             (t as HTMLElement).style.willChange = "transform, opacity";
//         });

//         const startPct = (1 - threshold) * 100;
//         const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
//         const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
//         const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
//         const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
//         const start = `top ${startPct}%${sign}`;

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: el,
//                 start,
//                 toggleActions: "play none none none",
//                 once: true,
//                 onToggle: (self) => {
//                     scrollTriggerRef.current = self;
//                 },
//             },
//             smoothChildTiming: true,
//             onComplete: () => {
//                 animationCompletedRef.current = true;
//                 gsap.set(targets, {
//                     ...to,
//                     clearProps: "willChange",
//                     immediateRender: true,
//                 });
//                 onLetterAnimationComplete?.();
//             },
//         });

//         tl.set(targets, { ...from, immediateRender: false, force3D: true });
//         tl.to(targets, {
//             ...to,
//             duration,
//             ease,
//             stagger: delay / 1000,
//             force3D: true,
//         });

//         return () => {
//             tl.kill();
//             if (scrollTriggerRef.current) {
//                 scrollTriggerRef.current.kill();
//                 scrollTriggerRef.current = null;
//             }
//             gsap.killTweensOf(targets);
//             if (splitter) {
//                 splitter.revert();
//             }
//         };
//     }, [
//         text,
//         delay,
//         duration,
//         ease,
//         splitType,
//         from,
//         to,
//         threshold,
//         rootMargin,
//         onLetterAnimationComplete,
//     ]);

//     return (
//         <p
//             ref={ref}
//             className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
//             style={{
//                 textAlign,
//                 wordWrap: "break-word",
//             }}
//         >
//             {text}
//         </p>
//     );
// };

// export default SplitText;


"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string | ((t: number) => number);
    splitType?: "chars" | "words";
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: React.CSSProperties["textAlign"];
    onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = "",
    delay = 100,
    duration = 0.6,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    onLetterAnimationComplete,
}) => {
    const refs = useRef<HTMLElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refs.current.length) return;

        const startPct = (1 - threshold) * 100;
        const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
        const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
        const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
        const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
        const start = `top ${startPct}%${sign}`;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start,
                toggleActions: "play none none none",
                once: true,
                onEnter: () => {
                    refs.current.forEach((t) =>
                        (t.style.willChange = "opacity, transform")
                    );
                },
            },
            onComplete: () => {
                gsap.set(refs.current, {
                    ...to,
                    clearProps: "willChange",
                    immediateRender: true,
                });
                onLetterAnimationComplete?.();
            },
        });

        tl.set(refs.current, { ...from, immediateRender: false, force3D: true });
        tl.to(refs.current, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            force3D: true,
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.killTweensOf(refs.current);
        };
    }, [
        delay,
        duration,
        ease,
        from,
        to,
        threshold,
        rootMargin,
        onLetterAnimationComplete,
    ]);

    const getSplitText = () => {
        const items =
            splitType === "words"
                ? text.split(" ")
                : text.split(""); // default is chars

        return items.map((item, idx) => (
            <span
                key={idx}
                ref={(el) => (refs.current[idx] = el!)}
                className="inline-block"
            >
                {item === " " ? "\u00A0" : item}
            </span>
        ));
    };

    return (
        <div
            ref={containerRef}
            className={`inline-block overflow-hidden whitespace-normal ${className}`}
            style={{
                textAlign,
                wordWrap: "break-word",
            }}
        >
            {getSplitText()}
        </div>
    );
};

export default SplitText;


