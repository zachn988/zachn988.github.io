import Link from 'next/link';
import styles from "@/styles/about.module.css";
import "@/styles/global.css";

export default function about() {
    return <div>
            <div className="address_bar">
            <div className="address"><p className="address_line"></p><p className="address_word">Address</p></div>
            <p className="links">About Me</p>
            </div>
        <div className="post_border">
            <div className="post">
                <h2 className={styles.name_header}>Zachary Nalepa</h2>
                <hr className={styles.header_hr}></hr>
                <div className={styles.wiki_content}>
                    <div>
                    <p>Zachary Nalepa is a graduate of Louisiana Tech University, earning a bachelor's degree in computer science with
                    concentrations in computer engineering and data science.</p>
                    <p>During his education, he became proficient in a number of
                    programming languages and frameworks, including Python, Java, and C++, as well as web and cloud services, including
                    Google Cloud, Google Firebase, and AWS.</p>
                    <p>When asked, Zachary says the most useful thing he learned was how to learn. He can learn a new language within a few
                    hours of picking it up. He says documentation is his best friend, that he enjoys reading, as well as writing user and
                    development docs.</p>
                    <p>He is most proud of a team project in his senior year, an android social media app built with flutter and dart, using 
                    a Google's Firebase backend. The team used an agile development style as a single scrum team. The app was built over
                    the course of six months in a four-person team and the result was a feature-complete social media app.</p>
                    <p>After graduation, Zachary began an internship at Revature as a Java developer, gaining valuable experience within the
                    Java web development ecosystem, using Maven and Spring to build websockets and API endpoints, as well as Spring's Apache
                    database and Java Database Connector.</p>
                    <p>Zachary is still learning new things and using his skills. You can see his projects at his <a href="https://github.com/zachn988">
                    Github</a> and projects page <a href="/projects">here</a>.
                    </p>
                    </div>
                    <div className={styles.headshot_border}>
                        <h6 className={styles.headshot_name}>Zachary Nalepa</h6>
                        <div className={styles.headshot}>
                            headshot
                        </div>
                        <h6 className={styles.headshot_desc}>Zachary Nalepa at his alma mater<br></br>2024</h6>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}