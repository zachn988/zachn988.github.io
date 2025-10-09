import Link from 'next/link';
import "../styles/global.css";

export default function Home() {
  return <div>
    <div>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links"><Link href="/">Blog</Link> &gt; <Link href="/">Inferno</Link> &gt; <Link href="/">Canto 1</Link></p>
        </div>
            <div className="post_border">
                <p className="post">
                    September 29 2025 <br></br><br></br>
                    In the middle of the journey of our life I came to myself in a dark wood where the
                    straight way was lost. Ah! how hard a thing it is to tell what a wild,
                    and rough, and stubborn wood this was, which
                    in my thought renews the fear! So bitter is it, that scarcely more is death : but
                    to treat of the good that I ...
                </p>
            </div>
        <hr className="post_divider_hr"></hr>
        <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links">Blog &gt; Inferno &gt; Canto 1</p>
        </div>
            <div className="post_border">
                <p className="post">
                September 29 2025 <br></br><br></br>
                In the middle of the journey of our life I came to myself in a dark wood where the
                straight way was lost. Ah! how hard a thing it is to tell what a wild,
                and rough, and stubborn wood this was, which
                in my thought renews the fear! So bitter is it, that scarcely more is death : but
                to treat of the good that I ...
            </p>
        </div>
        <br></br>
    </div>


  </div>
}