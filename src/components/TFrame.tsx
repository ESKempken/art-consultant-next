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