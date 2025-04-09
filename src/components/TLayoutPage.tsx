import styles from "@/styles/TLayoutPage.module.scss";

interface ChildProps {
    header: React.ReactNode;
    body: React.ReactNode;
    footer: React.ReactNode;
}

export default function TLayoutPage({ header, body, footer }: ChildProps) {
    
    return (
        <div className={styles.LayoutPage}>
            <div className={styles.LayoutPage__header}>
                {header}
            </div>

            <div className={styles.LayoutPage__body}>
                {body}
            </div>

            <div className={styles.LayoutPage__footer}>
                {footer}
            </div>
        </div>
    )
}