import Link from 'next/link';
import './layout.css';
import Home from "./page.js";

export default function RootLayout({ children }) {
  return <html lang="en">
    <head>
        <title>Layout</title>
        <meta name="author" content="Zachary Nalepa"></meta>
        <meta name="description" content="My personal portfolio on NextJS and Github Pages"></meta>        
        
    </head>
    <body>
        <header>Hello</header>
        <div className="content">
            <div className="navigation">
                <div className="nav_title">
                    Navigation
                </div>
                <div className="nav_links">
                    <Link href="/home">Home</Link><br></br>
                    <Link href="">About Me</Link><br></br>
                    <Link href="">Projects</Link><br></br>
                    <Link href="">Blog</Link><br></br>
                    <Link href="">Contact</Link><br></br>
                    <Link href="">Template</Link><br></br>
                </div>
                <div className="suggested">
                    <div className="nav_title">
                        Recent Posts
                    </div>
                    <div className="nav_links">
                        <Link href="" className="recent_title">Canto 1</Link>
                        <p className="empty">empty</p>
                        <h6>Sept 29 2025</h6>
                    </div>

                </div>
            </div>
            <div className="center">
                <div className="center_title">
                    Home
                </div>
                <div>{ children }</div>
            </div>
            
        </div>
    </body>

    </html>
}