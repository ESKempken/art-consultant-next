import styles from "@/styles/TFrame.module.scss"; 
import { useEffect, useRef } from "react";  


export default function TFrame({cropFrame, children}: { cropFrame: number, children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        // Cal: Ease in
        const percentage = Math.pow(100, (cropFrame / 100)) || 0;
        const edgeSpacer = percentage * 0.125 + '%';
        
        containerRef.current!.style.setProperty('--crop', edgeSpacer);

    }, [cropFrame]);


    return (
        <div>
            <div className={styles.Frame} ref={containerRef}>
                <div className={styles.Frame__edge}></div>
                <div className={styles.Frame__edge}></div>
                <div className={styles.Frame__edge}></div>
                <div className={styles.Frame__edge}></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}