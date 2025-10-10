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
            <div>&gt;ProjectName</div>
            <div className={styles.blog_explorer}>
                <Link href="/blog/website/10-01-25" className={styles.explorer_link} id="project1_child">
                Dev Log Day 2</Link>
                <Link href="/blog/10-01-25" className={styles.explorer_link} id="project1_child">
                Dev Log Day 3</Link>
            </div>
            <div>&gt;ProjectName2</div>
            <div className={styles.blog_explorer}>
                <Link href="/blog/10-01-25" className={styles.explorer_link} id="project1_child">
                Dev Log Day 2</Link>
                <Link href="/blog/10-01-25" className={styles.explorer_link} id="project1_child">
                Dev Log Day 3</Link>
            </div>
        </div>
        <div className="post_border">{ children }</div>
        </div>
    </div>
}