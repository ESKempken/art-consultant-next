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
        let anchorTop: number;
        let anchorBot: number;

        const updateDimensions = () => {
            anchorTop = containerRef.current!.offsetTop;
            anchorBot = anchorTop + containerRef.current!.offsetHeight;
        };

        const handleScroll = () => {
            const percentage = travelProgress(anchorTop, anchorBot);

            if (percentage === 100) {
                setShowNav(true);
                setCropFrame(100);
            } else {
                setShowNav(false);
                setCropFrame(percentage);
            }
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
    }, [containerRef, setShowNav, setCropFrame]);


    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}