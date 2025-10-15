import Link from 'next/link'
import styles from '@/styles/blog_page.module.css'
export default function Article() {
	return <div>
		<div className={styles.address_bar}>
			<div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
			<p className={styles.links}><Link href='/blog'>Blog</Link> &gt; <Link href='/blog/website'>Personal Website</Link> &gt; <Link href='/blog/website/10-07-25'>Dev Log 3</Link></p>
		</div>
		<div className={styles.post_border}>
			<p className={styles.post_title}>Day 4 of working on the website. October 07 2025</p>
			<p className={styles.post_paragraph}>I worked a lot last night, trying out React and NextJS, before deciding to use next.
				I spent some time trying to work out some bugs with my git bash(???), which I&apos;ve
				never had a problem with before then. When I finally got to work on the site itself,
				I built the layout for the home pages first, and settled on a windows 98 look because
				the background is a solid color. I pretty much used the html I had already written for
				the legacy page, but had to tweak the CSS for a few hours to get the look I wanted. 
				When I finished for the night, and deployed to github pages, for some reason the styles
				weren&apos;t loading. The layout and page were loading correctly, like the HTML was correct,
				but the CSS was not. I gave up for the night.
			</p>
			<p className={styles.post_paragraph}>This morning, I got to work fixing the deployment, which involved lots of google, before
				making a change to the postcss.config.ts file. Which did work, and I&apos;m happy with how the
				site looks for now. I want to make some changes, like the link buttons aren&apos;t a uniform
				size, and obviously adding in real functionality, plus work on the &quot;taskbar&quot; at the top.
				But I&apos;ll take a short break after fixing the github deployment. I will definitely be
				using a dev branch for the work, I will not mess the deployment up again. Plus, I don&apos;t
				need to redeploy every time I make a small CSS change.
			</p>
		</div>
	</div>
}