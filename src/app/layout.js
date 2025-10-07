import Link from 'next/link';
import styles from './layout.module.css';
import Home from "./page.js";


export default function RootLayout({ children }) {
  return <html lang="en">
    <head>
        <title>Layout</title>
        <meta name="author" content="Zachary Nalepa"></meta>
        <meta name="description" content="My personal portfolio on NextJS and Github Pages"></meta>        
        
    </head>
    <body className={styles.body}>
        <header className={styles.header}>Hello</header>
        <div className={styles.content}>
            <div className={styles.navigation}>
                <div className={styles.nav_title}>
                    Navigation
                </div>
                <div className={styles.nav_links}>
                    <Link href="/home" className={styles.a}>Home</Link><br></br>
                    <Link href="" className={styles.a}>About Me</Link><br></br>
                    <Link href="" className={styles.a}>Projects</Link><br></br>
                    <Link href="" className={styles.a}>Blog</Link><br></br>
                    <Link href="" className={styles.a}>Contact</Link><br></br>
                    <Link href="" className={styles.a}>Template</Link><br></br>
                </div>
                <div className={styles.suggested}>
                    <div className={styles.nav_title}>
                        Recent Posts
                    </div>
                    <div className={styles.nav_links}>
                        <Link href="" className={styles.a}>Canto 1</Link>
                        <p className={styles.empty}>empty</p>
                        <h6 className={styles.h6}>Sept 29 2025</h6>
                    </div>

                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.center_title}>
                    Home
                </div>
                <Home></Home>
            </div>
            
        </div>
    </body>

    </html>
}