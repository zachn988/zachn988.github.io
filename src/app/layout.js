import Link from 'next/link';
import '@/styles/global.css';


export default function RootLayout({ children }) {
  return <html lang="en">
    <head>
        <title>Layout</title>
        <meta name="author" content="Zachary Nalepa"></meta>
        <meta name="description" content="My personal portfolio on NextJS and Github Pages"></meta>        
        
    </head>
    <body>
        <header>
            Hello
        </header>
        <div className="content">
            <div className="navigation">
                <div className="nav_title">
                    Navigation
                </div>
                <div className="nav_links">
                    <Link href="/" className="button_link">Home</Link>
                    <Link href="/about" className="button_link">About Me</Link>
                    <Link href="/projects" className="button_link">Projects</Link>
                    <Link href="/blog" className="button_link">Blog</Link>
                    <Link href="/contact" className="button_link">Contact</Link>
                    <Link href="/template" className="button_link">Template</Link>   
                </div>
                <div className="suggested">
                    <div className="nav_title">
                        Recent Posts
                    </div>
                    <div className="nav_links">
                        <Link href="/blog/website/10-13-25">Website Dev Log 6</Link>
                        <h6>Oct. 13 2025</h6>
                        <Link href="/blog/website/10-09-25">Website Dev Log 5</Link>
                        <h6>Oct. 09 2025</h6>
                    </div>

                </div>
            </div>
            <div className="center">
                <div className="center_title">
                    Browser
                </div>
                <div>{ children }</div>
            </div>
            <div></div>
            <div className="lorem">
                <p className="font_1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="font_2">Labore, ea officiis. Unde, reprehenderit incidunt.</p> 
                <p className="font_3">Iusto earum, suscipit hic laborum soluta adipisci dolore</p>
                <p className="font_4">veritatis voluptatum odio quis necessitatibus maxime, nostrum distinctio.</p>
            </div>
            
        </div>
    </body>

    </html>
}