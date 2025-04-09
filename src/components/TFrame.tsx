import styles from "@/styles/TFrame.module.scss";
import { frameEffect } from "@/scripts/effects";    

export default function TFrame() {

    // FIXME
    // frameEffect()


    return (
        <div className={styles.Frame} id="frame">
            <div className={styles.Frame__edge}></div>
            <div className={styles.Frame__edge}></div>
            <div className={styles.Frame__edge}></div>
            <div className={styles.Frame__edge}></div>
        </div>
    );
}