import Link from "next/link"
import styles from "@/styles/blog.module.css"

export default function BlogLayout({ children }) {
    return <div>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links">Blog</p>
        </div>
        <div className={styles.blog_body}>
        <div className="post_border">
            <div>&gt;Personal Website</div>
            <div className={styles.blog_explorer}>
                <Link href="/blog/website/10-13-25" className={styles.explorer_link} id="project1_child">
                Dev Log 6</Link>
                <Link href="/blog/website/10-09-25" className={styles.explorer_link} id="project1_child">
                Dev Log 5</Link>
                <Link href="/blog/website/10-08-25" className={styles.explorer_link} id="project1_child">
                Dev Log 4</Link>
                <Link href="/blog/website/10-07-25" className={styles.explorer_link} id="project1_child">
                Dev Log 3</Link>
                <Link href="/blog/website/10-06-25" className={styles.explorer_link} id="project1_child">
                Dev Log 2</Link>
                <Link href="/blog/website/10-01-25" className={styles.explorer_link} id="project1_child">
                Dev Log 1</Link>
                
            </div>
            <div>&gt;DummyProjectName</div>
            <div className={styles.blog_explorer}>
                <Link href="/blog" className={styles.explorer_link} id="project1_child">
                Dev Log 2</Link>
                <Link href="/blog/" className={styles.explorer_link} id="project1_child">
                Dev Log 1</Link>
                
            </div>
        </div>
        <div>
        <div>{ children }</div>
        </div>
        </div>
    </div>
}