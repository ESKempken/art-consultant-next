import { useEffect, useRef } from "react";
import { travelProgress } from "@/scripts/effects";

export default function TTrack({children}: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const anchorTop = containerRef.current!.offsetTop;
        const anchorBot = anchorTop + containerRef.current!.offsetHeight;

        window.addEventListener('scroll', () => {
            const percentage = travelProgress(anchorTop, anchorBot);

            // FIXME Why 86% max? 
            console.log(percentage)

            // Cal: Ease in
            // percentage = Math.pow(100, (percentage / 100 )) || 0;

            // Cal: Fraction of 75% FIXME
            // const edgeSpacer = percentage * 0.125 + '%';
            // document.body.style.setProperty('--crop', edgeSpacer);

            // console.log(percentage) 

        });
    },[containerRef])
    
    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
};