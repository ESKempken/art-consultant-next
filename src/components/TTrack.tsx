import { useEffect, useRef } from "react";
import { travelProgress } from "@/scripts/effects";


interface TTrackProps {
    setCropFrame(value: number): void;
    setShowNav(value: boolean): void;
    setShowTexture(value: boolean): void;
    children: React.ReactNode;
}


export default function TTrack({ setCropFrame, setShowNav, setShowTexture, children }: TTrackProps) {
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
                setShowTexture(true);
                setCropFrame(100);
            } else {
                setShowNav(false);
                setShowTexture(false);
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
    }, [containerRef, setCropFrame, setShowTexture, setShowNav]);


    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}