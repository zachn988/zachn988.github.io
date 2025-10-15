import Link from 'next/link'
import styles from '@/styles/blog_page.module.css'
export default function Article() {
	return <div>
		<div className={styles.address_bar}>
			<div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
			<p className={styles.links}><Link href='/blog'>Blog</Link> &gt; <Link href='/blog/website'>Personal Website</Link> &gt; <Link href='/blog/website/10-09-25'>Dev Log 5</Link></p>
		</div>
		<div className={styles.post_border}>
			<p className={styles.post_title}>Day 6 of working on the website. October 09 2025</p>
			<p className={styles.post_paragraph}>Today I&apos;m building the blog homepage.
			</p>
			<p className={styles.post_paragraph}>I tried doing an automatic method, with functions finding posts and formatting them into
				the blog page, but it didn&apos;t work, and I just want to make progress today. Unfortunately,
				that means posts will have to be formatted manually for the time being. I&apos;m not even sure
				if I can do functional retrieval as a static website anyways. I don&apos;t think slug directories
				are a very static concept. It was worth a shot, though.</p>

			<p className={styles.post_paragraph}>Anyways, the current working structure is a file directory-like structure on the left,
				with posts on the middle-right and when a post is selected, the requisite page is loaded.
				Pushed to working branch, will merge once more functional.
			</p>
		</div>
	</div>
}