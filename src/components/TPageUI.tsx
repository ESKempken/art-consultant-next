import { ReactNode, useEffect, useRef } from "react";
import styles from "@/styles/TPageUI.module.scss";
import { travelProgress } from "@/scripts/effects";



export default function TPageUI({ children }: { children: ReactNode }) {
    // const pageUIRef = useRef<HTMLDivElement>(null);
    // const navRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const anchorTop = pageUIRef.current!.offsetTop;
    //     const anchorBot = anchorTop + pageUIRef.current!.offsetHeight;

    //     window.addEventListener('scroll', () => {
    //         const percentage = travelProgress(anchorTop, anchorBot);

    //         // FIXME Why 86% max? 
    //         console.log(percentage)

    //         // Cal: Ease in
    //         // percentage = Math.pow(100, (percentage / 100 )) || 0;

    //         // Cal: Fraction of 75% FIXME
    //         // const edgeSpacer = percentage * 0.125 + '%';
    //         // document.body.style.setProperty('--crop', edgeSpacer);

    //         // console.log(percentage) 

    //         if (percentage ===  100) {
    //             navRef.current!.removeAttribute('hidden');
    //         } else {
    //             navRef.current!.setAttribute('hidden', 'true');
    //         }
    //     });
    // },[pageUIRef])
    
    return (
        <div className={styles.PageUI}>
            <div className={styles.PageUI__header}>
                <nav className={styles.Navbar} hidden>
                    <h3>/<em> Caroline Field</em></h3>

                    <a href="#top">
                        <img src="../assets/icon-arrow-black.svg" alt="scroll to top" />
                    </a>
                </nav>
            </div>

            <div className={styles.PageUI__body}>
                {children}
            </div>

            <div className={styles.PageUI__footer}>
                <footer className={styles.Credits}>
                    <a
                        href="https://github.com/ESKempken/art-consultant"
                        className={styles.Credits__footNotes}
                    >Developed by Ellis Kempken, 2025.</a>
                </footer>
            </div>
        </div>
    )
}