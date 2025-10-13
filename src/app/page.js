import Link from 'next/link';
import "../styles/global.css";

export default function Home() {
  return <div>
    <div>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links"><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/blog/website/10-01-25">Dev Log 1</Link></p>
        </div>
            <div className="post_border">
                <p className="post">
                    Day 2 of working on my personal website. Oct 01 2025 <br></br><br></br>
                    Starting with nav links on the home page, trying to find a color set that I like.
                    I&apos;ll settle on #d4783a for nav links and #ba639d for the currently selected page.
                    This will probably change in the future, along with most of the design of the site, but I need
                    to settle on something for now. <br></br>
                    I added hover animations on links to hide the underline. Small change but it helps the nav box feel more dynamic.
                    Also added a font for the nav box, courier prime. I wanted a monospace font for the nav box specifically.
                    I should fiddle with the font on the rest of the content later. <Link href="/blog/website/10-01-25">. . .</Link>

                </p>
            </div>
        <hr className="post_divider_hr"></hr>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links"><Link href="/blog">Blog</Link> &gt; <Link href="/blog/website">Personal Website</Link> &gt; <Link href="/blog/website/10-06-25">Dev Log 2</Link></p>
        </div>
            <div className="post_border">
                <p className="post">
                Before I get started, I have some ideas about the final look of the website.
                I saw someone else use windows 98 elements in a project. Maybe I use windows XP or windows 7 elements in mine?
                Idk, ust some thoughts. I want to finish building out the meat of the site before making sweeping changes to the 
                look and feel. That would require restructuring elements and building a new CSS file. <br></br>
                Now, today I want to start building the blog home page. It should display recent posts and maintain the overall look of the site.
                I may make some small overall changes to font size as well. <Link href="/blog/website/10-06-25">. . .</Link>
            </p>
        </div>
        <br></br>
    </div>


  </div>
}