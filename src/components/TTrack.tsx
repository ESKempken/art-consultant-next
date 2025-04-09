import { useEffect, useRef } from "react";
import { travelProgress } from "@/scripts/effects";

interface TTrackProps {
    setShowNav(value: boolean): void;
    setCropFrame(value: number): void;
    children: React.ReactNode;
}


export default function TTrack({ setShowNav, setCropFrame, children }: TTrackProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const anchorTop = containerRef.current!.offsetTop;
        const anchorBot = anchorTop + containerRef.current!.offsetHeight;

        const handleScroll = () => {
            const percentage = travelProgress(anchorTop, anchorBot);

            if (percentage === 100) {
                setShowNav(false);
            }

            // Cal: Ease in
            setCropFrame(Math.pow(100, (percentage / 100)) || 0);

            console.log(percentage)

            // Cal: Fraction of 75% FIXME
            // const edgeSpacer = percentage * 0.125 + '%';
            // document.body.style.setProperty('--crop', edgeSpacer);
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setCropFrame, setShowNav]);

    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
};