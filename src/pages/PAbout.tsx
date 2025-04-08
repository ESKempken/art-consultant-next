import styles from "@/styles/PAbout.module.scss";

// Components 
import OInfo from "@/components/OInfo";
import OGallery from "@/components/OGallery";
import OServices from "@/components/OServices";
import TPageUI from "@/components/TPageUI";
import OSummary from "@/components/OSummary";


export default function About() {
  return (
    <div>
        <div id="frame-container"></div>

        <main>
            
            <section className={styles.Splash}>
                <OInfo/>
                <OGallery/>
            </section>
            
            <section>
                <OServices/>
            </section>
    
            <TPageUI>
                <OSummary/>
            </TPageUI>

        </main>
    </div>
  );
}