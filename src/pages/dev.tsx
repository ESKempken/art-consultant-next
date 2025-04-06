import styles from "@/styles/Home.module.css";
import TInfo from "@/components/TInfo";


export default function Dev() {
  return (
    <div>
        <div id="frame-container"></div>

        <main>
            
            <section className={styles.Splash}>
                <TInfo/>
                <div id="gallery-container"></div>
            </section>
            
            <section>
                <div id="services-container"></div>
            </section>
    
            <section>
                <div id="navbar-container"></div>
                <div id="action-container"></div>
                <div id="footer-container"></div>
            </section>

        </main>
    </div>
  );
}