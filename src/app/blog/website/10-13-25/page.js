import Link from 'next/link'
import styles from '@/styles/blog_page.module.css'
export default function Article() {
	return <div>
		<div className={styles.address_bar}>
			<div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
			<p className={styles.links}><Link href='/blog'>Blog</Link> &gt; <Link href='/blog/website'>Personal Website</Link> &gt; <Link href='/blog/website/10-13-25'>Dev Log 6</Link></p>
		</div>
		<div className={styles.post_border}>
			<p className={styles.post_title}>Day 7 of working on the website. October 13 2025</p>
			<p className={styles.post_paragraph}>I finished last week with the bones of the blog page. Today I wanted to finish the main
				functionality, and I have. The &quot;file explorer&quot; on the left contains links to blog posts
				and the posts show up on the right when called. The address bar is correct as well.
			</p>
			<p className={styles.post_paragraph}>I have manually transferred two posts onto the website. Because of the layout structure,
				I have to put each post in its own folder within the website directory, on its own
				page.js file. Its not the wors thing in the world to do manually, but I could easily write
				a python script to do the work for me, including swapping in escape characters for apostraphes
				and arrows, which I use frequently, as well as any other characters that I may use.
			</p>
			<p className={styles.post_paragraph}>Now, I have to fix &quot;recent posts&quot; on the home layout, as well swap in the real posts
				on the home page. I also want to make &quot;under construction&quot; pages for the projects, contact,
				and template pages. I&apos;ll write some about my projects, but that will take some time.
			</p>
			<p className={styles.post_paragraph}>Yeah, now that I have the home page and layout &quot;fixed&quot; I would really like a python script
				to do this work for me. I can even have it populate the main page, maybe.
			</p>
			<p className={styles.post_paragraph}>I haven&apos;t mentioned, but on day 5, I tried writing javascript functions to populate blog posts
				automatically from a text or markdown file. It didn&apos;t work, and I&apos;m not sure how much of the
				issue was with my code or the website being static. For now, I&apos;d rather write some python
				and in the future, once the site is filled out, I can do some more research and figure out the
				javascript.
			</p>
			<p className={styles.post_paragraph}>Bug: blog pages don&apos;t load css when fetched with a direct link instead of a Link element
				Potential fix: add a layout for each post. 
				Pushed Fix: assetPrefix in next.config.mjs was ./ instead of empty, causing assets to be called
				from the current directory instead of the home directory.
			</p>
			<p className={styles.post_paragraph}>Now that the issue is fixed, I am surprised this did not pop up earlier. It only showed up
				about 3+ nested layouts deep, but the fix makes it sound like it should have popped up
				with any nested layout.
			</p>
		</div>
	</div>
}