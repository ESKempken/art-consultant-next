import styles from "@/styles/TFrame.module.scss";
import { useEffect, useRef } from "react";


interface TFrameProps { 
    cropFrame: number, 
    showTexture: boolean,
    children: React.ReactNode 
}

export default function TFrame({ cropFrame, showTexture, children }: TFrameProps) {
    const frameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        frameRef.current!.style.setProperty('--crop', `-${cropFrame}s`);
    }, [cropFrame]);

    useEffect(() => {
        if (showTexture) {
            frameRef.current!.classList.add('--texture');
        } else {
            frameRef.current!.classList.remove('--texture');
        }
    }, [showTexture]);

    return (
        <div>
            <div className={styles.Frame} ref={frameRef}>
                <div className={styles.Frame__container}>
                    <div className={styles.Frame__edge}></div>
                    <div className={styles.Frame__edge}></div>
                    <div className={styles.Frame__edge}></div>
                    <div className={styles.Frame__edge}></div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}