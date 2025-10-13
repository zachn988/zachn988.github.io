import Link from "next/link"
import styles from '@/styles/blog_page.module.css';

export default function Article() {
    return <div>
        <div className={styles.address_bar}>
            <div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
            <p className={styles.links}><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/">Dev Log 1</Link></p>
        </div>
        <div className={styles.post_border}>
            <p className={styles.post_title}>Day 2 of working on my personal website. Oct 01 2025</p>

            <p className={styles.post_paragraph}>Starting with nav links on the home page, trying to find a color set that I like.
            I&apos;ll settle on #d4783a for nav links and #ba639d for the currently selected page.
            This will probably change in the future, along with most of the design of the site, but I need
            to settle on something for now.</p>
            <p className={styles.post_paragraph}>I added hover animations on links to hide the underline. Small change but it helps the nav box feel more dynamic.
            Also added a font for the nav box, courier prime. I wanted a monospace font for the nav box specifically.
            I should fiddle with the font on the rest of the content later.
            I&apos;ll also make these changes to the template page.</p>
            <p className={styles.post_paragraph}>While I&apos;m at it, #fbe579 is the color of content boxes and #333333 is the color of text and borders.
            This log will also serve as a test post for the blog page.</p>
            <p className={styles.post_paragraph}>I worked on the about me page, adding a little summary and a headshot pic of myself.
            Also, I changed the font of the first sentence of the lorem ipsum block at the bottom of each page.
            I imagine it as a small font test type thing.</p>


        </div>

    </div>
}