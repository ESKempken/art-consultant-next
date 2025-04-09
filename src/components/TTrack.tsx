import { useEffect, useRef } from "react";
import { travelProgress } from "@/scripts/effects";

interface TTrackProps {
    setShowNav(value: boolean): void;
    setCropFrame(value: number): void;
    children: React.ReactNode;
}


export default function TTrack({setShowNav, setCropFrame, children}: TTrackProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const anchorTop = containerRef.current!.offsetTop;
        const anchorBot = anchorTop + containerRef.current!.offsetHeight;

        window.addEventListener('scroll', () => {
            const percentage = travelProgress(anchorTop, anchorBot);

            if (percentage === 100) {
                setShowNav(false);
            }


            // Cal: Ease in
            setCropFrame(Math.pow(100, (percentage / 100 )) || 0);

            // Cal: Fraction of 75% FIXME
            const edgeSpacer = percentage * 0.125 + '%';
            document.body.style.setProperty('--crop', edgeSpacer);

            // console.log(percentage) 

        });
    },[containerRef])
    
    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
};