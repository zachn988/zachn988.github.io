import Link from "next/link"
import styles from '@/styles/blog_page.module.css';

export default function Article() {
    return <div>
        <div className={styles.address_bar}>
            <div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
            <p className={styles.links}><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link></p>
        </div>
        <div className={styles.post_border}>
            <p className={styles.post_title}>My Personal Website</p>
            <p className={styles.post_paragraph}>
            I&apos;m building this website as a home for me and my projects on the internet. I&apos;m not the
            best web developer in the world, so this will also be a learning experience, and I expect
            the website to be in progress for a good while. This post will serve as the home post
            for the website blog collection. I&apos;ll detail major updates and changes in this post.</p>

            <p className={styles.post_paragraph}>I began working on this website a long time ago, about August 2024. Since that time, There
            haven&apos;t been any major changes. In October 2025, I began work again and built a version 1.0
            that I liked more than the old 2024 version. This version was built with github pages and
            direct HTML and CSS. This work spans <Link href="/blog/website/10-01-25">dev log 1</Link> and <Link href="/blog/website/10-06-25">dev log 2.</Link> </p>
            <p className={styles.post_paragraph}>I realized I wanted more complexity, specifically within the blog and projects pages, 
            so I created a branch of the project using ReactJS. This did not last long. This work spans
            part of dev log 3 </p>
            <p className={styles.post_paragraph}>After some more research, I created another branch using NextJS. I liked the layout functionality
            and the automatic routing. I set up a test page on the github repo and set up github to build the
            static page. This is the current implementation of the website and its work spans
            dev logs 3 to the <Link href="/blog/website/03-10-26">most recent log.</Link></p>
            <p className={styles.post_paragraph}>This post was last updated Oct. 13 2025</p>
        </div>
    </div>
}