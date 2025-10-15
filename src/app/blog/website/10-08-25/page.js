import Link from 'next/link'
import styles from '@/styles/blog_page.module.css'
export default function Article() {
	return <div>
		<div className={styles.address_bar}>
			<div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
			<p className={styles.links}><Link href='/blog'>Blog</Link> &gt; <Link href='/blog/website'>Personal Website</Link> &gt; <Link href='/blog/website/10-08-25'>Dev Log 4</Link></p>
		</div>
		<div className={styles.post_border}>
			<p className={styles.post_title}>Day 5 of working on the website. October 08 2025</p>
			<p className={styles.post_paragraph}>Now that I have a working skeleton on github pages, I want to build out the functionality
				of the home pages. Goals for today: about page, blog homepage.
				I kind of imagine the about page being a &quot;wikipedia&quot; article about me, within the
				&quot;web browser&quot; of the web page.
			</p>
			<p className={styles.post_paragraph}>I have the bulk of the about page made. I wrote a biography, as well as a placeholder
				headshot. The biography will have to be iterated on in the future, but it works for now.
			</p>
			<p className={styles.post_paragraph}>Next will be the blog homepage. I&apos;ll have to think about how I want it to look. I may
				search for some inspiration.
			</p>
			<p className={styles.post_paragraph}>Well, I didn&apos;t end up working on the blog homepage, but I did make some changes to the
				stylesheets. I spent probably 2 hours just on that, to make some small changes nobody
				would notice. I notice, though. Still looking for blog inspiration. I want the blog homepage
				to be stylistically related to the site homepage, but be its own thing. Basically just
				a new layout. And the same idea for projects.
			</p>
			<p className={styles.post_paragraph}></p>
			<p className={styles.post_paragraph}>Inspiration and important links:
			</p>
			<p className={styles.post_paragraph}>
				<a href="https://static.wikia.nocookie.net/windows/images/8/80/W98-2.png/revision/latest/scale-to-width-down/1000?cb=20220918030940">screenshot of windows 98 desktop and windows</a>
			</p>
			<p className={styles.post_paragraph}>
				<a href="https://www.dafont.com/leviwindows.font?text=All+your+base+belong+to+us.+Cancel+OK">&quot;Levi Windows&quot; font</a>
			</p>
		</div>
	</div>
}