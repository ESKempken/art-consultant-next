import styles from "@/styles/PAbout.module.scss";

// Components 
import TInfo from "@/components/OInfo";
import TGallery from "@/components/OGallery";


export default function About() {
  return (
    <div>
        <div id="frame-container"></div>

        <main>
            
            <section className={styles.Splash}>
                <TInfo/>
                <TGallery/>
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