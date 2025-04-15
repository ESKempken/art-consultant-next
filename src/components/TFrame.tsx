import styles from "@/styles/TFrame.module.scss";
import { useEffect, useRef } from "react";


export default function TFrame({ cropFrame, children }: { cropFrame: number, children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        containerRef.current!.style.setProperty('--crop', `${cropFrame}`);

    }, [cropFrame]);


    return (
        <div>
            <div className={styles.Frame}>
                <div className={styles.Frame__container} ref={containerRef}>
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