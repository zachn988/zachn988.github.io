import styles from '@/styles/projects.module.css'

export default function Projects() {
    return <div> 
        <h1>Under construction!</h1>
        <div className="address_bar">
                <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
                <p className="links">Projects</p>
        </div>
            <div className={styles.post_border}>
            <div className={styles.project_grid}>
                <div className={styles.project_box}>
                    <div className={styles.dummy_img}>
                        dummy img
                    </div>
                    <div className={styles.project_title}>
                        Dummy Title
                    </div>
                </div>
                <div className={styles.project_box}>
                    <div className={styles.dummy_img}>
                        dummy img
                    </div>
                    <div className={styles.project_title}>
                        Dummy Title
                    </div>
                </div>
                <div className={styles.project_box}>
                    <div className={styles.dummy_img}>
                        dummy img
                    </div>
                    <div className={styles.project_title}>
                        Dummy Title
                    </div>
                </div>
            </div>
        </div>
    </div>
}