import { useEffect, useRef } from "react";
import { travelProgress } from "@/scripts/effects";


interface TTrackProps {
    setProgress(value: number): void;
    children: React.ReactNode;
}


export default function TTrack({ setProgress, children }: TTrackProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let anchorTop: number;
        let anchorBot: number;

        const updateDimensions = () => {
            anchorTop = containerRef.current!.offsetTop;
            anchorBot = anchorTop + containerRef.current!.offsetHeight;
        };

        const handleScroll = () => {
            const percentage = travelProgress(anchorTop, anchorBot);
            setProgress(percentage);
        };

        updateDimensions(); // Initialize anchors

        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
            handleScroll(); // Recalculate scroll state after resizing
        });

        resizeObserver.observe(document.documentElement);
        window.addEventListener('scroll', handleScroll);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef, setProgress]);


    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}