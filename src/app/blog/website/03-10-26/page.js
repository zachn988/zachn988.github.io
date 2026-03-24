import Link from 'next/link'
import styles from '@/styles/blog_page.module.css'
export default function Article() {
	return <div>
		<div className={styles.address_bar}>
			<div className={styles.address}><p className={styles.address_line}></p><p className={styles.address_word}>Address</p></div>
			<p className={styles.links}><Link href='/blog'>Blog</Link> &gt; <Link href='/blog/website'>Personal Website</Link> &gt; <Link href='/blog/website/10-09-25'>Dev Log 7</Link></p>
		</div>
		<div className={styles.post_border}>
			<p className={styles.post_title}>Dev Log 7, begins March 10, 2026</p>
            <p className={styles.post_paragraph}>I recently re-enabled onedrive, specifically because I wanted to back up projects, including
                any gitignored files, like with NextJS node_modules. However, I had forgotten how much onedrive sucks and re-enabling it meant
                files and folders would be <strong>overwritten</strong> by the old backups, not merged together <strong>and</strong> overwritten
                files and folders are not moved somewhere or put in the recycle bin, just permanently deleted. I lost original dev logs, notes,
                and scripts that were not on github. Let this be a warning.
            </p>
            <p className={styles.post_paragraph}>I will begin to write sprint-length dev logs instead of daily logs.</p>
			<p className={styles.post_paragraph}>Goals for this sprint:
			</p>
            <ul className={styles.post_list}>
                <li>Fix grid layout in top-level layout. Length of nav and center content depend on each other, with the shortest 
                growing to the length of the longest. They should be independent.
                </li>
                <li>Improve the look of the blog homepage, along with making project sections in the blog nav collapseable.
                Also research any possible solution or alternative to manually editing layout files to update or add most recent posts.
                Website will remain static, so I&apos;ll probably have to write a python script.
                </li>
                <li><s>Possibly cap the length of posts and nav for blog pages with overflow scrolling. I&apos;ll have to figure out scroll bar styling
                to match the website design.
                </s></li>
                <li>Finish projects page. Will have to brainstorm ideas for the final look, too.
                </li>
            </ul>
			<p className={styles.post_paragraph}>First item, top-level grid layout. Easy fix, just changed from fixed grid layout to flex layout
                with nav at 60% width, center at 77% width, and keeping the same margins and borders.
            </p>
            <p className={styles.post_paragraph}>Second item, improving the blog homepage design. Turning the project headers into dropdown selectors
                was straightforward enough. queryselectors and some javascript was all it took. 
            </p>
			<p className={styles.post_paragraph}>
                For the projects page, I added a basic 3-wide grid of temporary boxes. The spirit of inspiration will help me improve it later when I add
                projects to the grid.
			</p>
		</div>
	</div>
}