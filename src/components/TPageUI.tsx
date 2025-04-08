import { ReactNode } from "react";
import styles from "@/styles/TPageUI.module.scss";


export default function TPageUI({ children }: { children: ReactNode }) {
    return (
        <div className={styles.PageUI} id="PageUI">
            <div className={styles.PageUI__header} id="header" hidden>
                <nav className={styles.Navbar} >
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