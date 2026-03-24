import Link from 'next/link';
import "../styles/global.css";

export default function Home() {
  return <div>
    <div>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links"><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/blog/website/03-10-26">Dev Log 7</Link></p>
        </div>
            <div className="post_border">
                <div className="post">
                    <p className="post_paragraph">Dev Log 7, begins March 10, 2026</p>
            <p className="post_paragraph">I recently re-enabled onedrive, specifically because I wanted to back up projects, including
                any gitignored files, like with NextJS node_modules. However, I had forgotten how much onedrive sucks and re-enabling it meant
                files and folders would be <strong>overwritten</strong> by the old backups, not merged together <strong>and</strong> overwritten
                files and folders are not moved somewhere or put in the recycle bin, just permanently deleted. I lost original dev logs, notes,
                and scripts that were not on github. Let this be a warning. <Link href="/blog/website/03-10-26">...</Link> </p>
            </div>
        </div>
        <hr className="post_divider_hr"></hr>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links"><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/blog/website/10-13-25">Dev Log 6</Link></p>
        </div>
            <div className="post_border">
                <div className="post">
                    <p>Day 7 of working on the website. October 13 2025</p>
                    <p>I finished last week with the bones of the blog page. Today I wanted to finish the main
                        functionality, and I have. The &quot;file explorer&quot; on the left contains links to blog posts
                        and the posts show up on the right when called. The address bar is correct as well.
                    </p>
                    <p>I have manually transferred two posts onto the website. Because of the layout structure,
                        I have to put each post in its own folder within the website directory, on its own
                        page.js file. Its not the wors thing in the world to do manually, but I could easily write
                        a python script to do the work for me, including swapping in escape characters for apostraphes
                        and arrows, which I use frequently, as well as any other characters that I may use. <Link href="/blog/website/10-13-25">...</Link>
                    </p>
                </div>
            </div>
        <br></br>
    </div>


  </div>
}