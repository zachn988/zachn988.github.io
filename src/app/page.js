import Link from 'next/link';
import "../styles/global.css";

export default function Home() {
  return <div>
    <div>
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
        <hr className="post_divider_hr"></hr>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links"><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/blog/website/10-09-25">Dev Log 5</Link></p>
        </div>
            <div className="post_border">
                <div className="post">
                    <p>Day 6 of working on the website. October 09 2025
                    </p>
                    <p>Today I&apos;m building the blog homepage.
                    </p>
                    <p>I tried doing an automatic method, with functions finding posts and formatting them into
                        the blog page, but it didn&apos;t work, and I just want to make progress today. Unfortunately,
                        that means posts will have to be formatted manually for the time being. I&apos;m not even sure
                        if I can do functional retrieval as a static website anyways. I don&apos;t think slug directories
                        are a very static concept. It was worth a shot, though. <Link href="/blog/website/10-09-25">...</Link>
                    </p>
            </div>
        </div>
        <br></br>
    </div>


  </div>
}