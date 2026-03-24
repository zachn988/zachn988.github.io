"use client";

import Link from "next/link"
import styles from "@/styles/blog.module.css"

export default function BlogLayout({ children }) {
    function togglePersonalWebsite() {

        const PW_links = document.querySelectorAll("#project1_child");
        //console.log(PW_links[0].style.display);

        for (var i = 0; i < PW_links.length; i++) {
            const el = window.getComputedStyle(PW_links[i]);
            if (el.getPropertyValue("display") === "block") {
                PW_links[i].style.display = "none";
            } else {
                PW_links[i].style.display = "block";
            }
        }
        return;
    }
    function toggleDummyProject() {
        const DP_links = document.querySelectorAll("#project2_child");

        for (var i = 0; i < DP_links.length; i++) {
            const el = window.getComputedStyle(DP_links[i]);
            if (el.getPropertyValue("display") === "block") {
                DP_links[i].style.display = "none";
            } else {
                DP_links[i].style.display = "block";
            }
        }
        return;
    }

    return <div>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links">Blog</p>
        </div>
        <div className={styles.blog_body}>
        <div className="post_border">
            <button className={styles.blog_dropdown} onClick={togglePersonalWebsite}><div className={styles.selector_arrow}>&gt;</div>Personal Website</button>
            <div className={styles.blog_explorer}>
                <Link href="/blog/website/03-10-26" className={styles.explorer_link} id="project1_child">
                Dev Log 7</Link>
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
            <button className={styles.blog_dropdown} onClick={toggleDummyProject}><div className={styles.selector_arrow}>&gt;</div>Dummy Project</button>
            <div className={styles.blog_explorer}>
                <Link href="/blog" className={styles.explorer_link} id="project2_child">
                Dev Log 2</Link>
                <Link href="/blog/" className={styles.explorer_link} id="project2_child">
                Dev Log 1</Link>
                
            </div>
        </div>
        <div>
        <div>{ children }</div>
        </div>
        </div>
    </div>
}