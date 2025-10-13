import Link from "next/link"
import styles from '@/styles/blog_page.module.css';

export default function Article() {
    return <div>
        <div className={styles.address_bar}>
            <div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
            <p className={styles.links}><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/">Dev Log 2</Link></p>
        </div>
        <div class={styles.post_border}>
            <p className={styles.post_title}>Dev Log 2, day 3 of work. Oct 06, 2025</p>

            <p className={styles.post_paragraph}>Before I get started, I have some ideas about the final look of the website.
                I saw someone else use windows 98 elements in a project. Maybe I use windows XP or windows 7 elements in mine?
                Idk, ust some thoughts. I want to finish building out the meat of the site before making sweeping changes to the 
                look and feel. That would require restructuring elements and building a new CSS file.</p>
            <p className={styles.post_paragraph}>Now, today I want to start building the blog home page. It should display recent posts and maintain the overall look of the site.
                I may make some small overall changes to font size as well.
                For now, I think I&apos;ll have to manually create each blog page. Unfortunate, but I just want the bones.
                Later, I&apos;ll look into generating them with javascript or something. I don&apos;t want to host a webserver for this,
                so react and spring are out of the question. I&apos;ll look into the options and figure something out.</p>
            <p className={styles.post_paragraph}>So, about the blog homepage, the current structure is h4 "post title" then h6 "date" below that, and then the first three lines
                of the blog post, punctuated with an elipses at the end to suggest continuation of the post. Might think about changing that later, too.</p>
            <p className={styles.post_paragraph}>I have the bones of the blog homepage now. Post titles share the same link coloring as the rest of the site. The whole div containing the
                post is an anchor pointing to the specific blog post.</p>
            <p className={styles.post_paragraph}>I&apos;ve added the first blog post page, along with some formatting of the post itself. The paragaphs are indented and there&apos;s a secondary nav
                section to move within the blog structure, like: blog &gt; project &gt; post. Along with the first post, I&apos;ve added suggested posts to the template,
                soon to be on every created page so far on the nav bar showing the most recent post and the top post. Man this&apos;ll be a bitch to change manually
                once I have more posts as it will require manually updating every single page. Might have to look into some javascript solutions sooner
                than I originally thought.</p>
            <p className={styles.post_paragraph}>I&apos;m kind of satisfied with progrss today, so I&apos;ll write down some more thoughts about inspiration and how I want the project to end up.
                I don&apos;t have very good design taste, and I&apos;m trying to change that. Right now, the website looks very immature, even though I believe
                it fits the vibe I&apos;m going for. I like late &apos;90s, early &apos;00s aesthetics, so that&apos;s what I was going for with the initial design. I want
                to stay within this idea, but I need to refine the look more. I spoke earlier about windows xp / windows 7 design elements and language.
                I really like the look and feel of these guis and I would love to find a way to adapt them to my website, especially windows 7 and the smooth,
                translucent look, but, like I also said, this would take some time and require lots of refactoring. I already need to clean up my CSS styles,
                so a massive overhaul isn&apos;t in the cards within the near future. About more specific elements: </p>
            <p className={styles.post_paragraph}>I want the header on the home page to be a marquee of hello or welcome but in different languages, and maybe in different fonts for fun.</p>
            <p className={styles.post_paragraph}>I need to write some javascript to generate the "suggested" section of the nav bar so I don&apos;t have to update it manually, on every page.</p>
            <p className={styles.post_paragraph}>I want to look at some fonts for paragraphs. I like the courier prime monospace font for links, but I want something else for paragraphs specifically.</p>
            <p className={styles.post_paragraph}>Right now, the homepage shows Canto 1 from Dante Alighieri&apos;s Inferno, as a placeholder for a blog post, but since I have the suggested post section,
                I may not need to show posts in the main space of the page. I may have to write some about past projects and put that on the homepage. Idk, might need
                some more thought and experimentation. I want the homepage to be a central area to connect every part of the website, but I don&apos;t want it to
                be a replacement for any specific part of the website. If that makes sense.</p>

        </div>

    </div>
}