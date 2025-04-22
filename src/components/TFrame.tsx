import styles from "@/styles/TFrame.module.scss";
import { useEffect, useRef } from "react";


interface TFrameProps { 
    cropFrame: number, 
    showTexture: boolean,
    showShadow: boolean,
}

export default function TFrame({ cropFrame, showTexture, showShadow }: TFrameProps) {
    const frameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        frameRef.current!.style.setProperty('--crop', `-${cropFrame}s`);
    }, [cropFrame]);

    
    useEffect(() => {
        const frameEl = frameRef.current!;

        const rect = frameEl.getBoundingClientRect();
        const refX = rect.left + rect.width / 2;
        const refY = rect.top + rect.height / 2;

        const handlePointer = (event: MouseEvent) => {
            frameEl.style.setProperty('--pointer-relative-x', `${event.clientX - refX}px`);
            frameEl.style.setProperty('--pointer-relative-y', `${event.clientY - refY}px`);
            frameEl.style.setProperty('--pointer-absolute-x', `${event.clientX}px`);
            frameEl.style.setProperty('--pointer-absolute-y', `${event.clientY}px`);
        }

        document.addEventListener('mousemove', handlePointer);
        return () => {
            document.removeEventListener('mousemove', handlePointer);
        };
    })


    return (
        <div>
            <div 
                ref={frameRef}
                className={styles.Frame}
                data-shadow={showShadow}
                data-texture={showTexture}
            >
                <div className={styles.Frame__container}>
                    <div className={styles.Frame__edge}></div>
                    <div className={styles.Frame__edge}></div>
                    <div className={styles.Frame__edge}></div>
                    <div className={styles.Frame__edge}></div>
                </div>
            </div>
        </div>
    );
}