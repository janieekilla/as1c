import styles from "@/app/styles/portfolio.module.css";
import Typewriter from "../components/Typewriter";

export default function Portfolio() {
  return (
    <>
      <section className={styles.portfolioHeader}>
        <div className={styles.photo}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            <Typewriter text={"Experience"} speed="150" />
            <div>
              My passion for blending creativity with real-time social media
              engagement found the perfect outlet in my work with IRO Paris,
              where I focused on managing the brand’s presence on Xiaohongshu
              (Little Red Book). As one of China’s most popular platforms for
              lifestyle, beauty, and fashion content, Xiaohongshu provided me
              with a dynamic environment to connect with a young,
              trend-conscious audience. By leveraging authentic reviews and
              engaging visuals, I implemented a content management strategy that
              led to a 10k increase in followers. My work revolved around
              analyzing trending topics, adjusting content strategies in
              real-time, and ensuring timely updates that aligned with fashion
              and social media trends. My focus on Xiaohongshu helped the brand
              establish a stronger foothold in China’s digital landscape,
              enhancing user interaction and increasing brand visibility. This
              experience allowed me to merge my passion for fashion with my
              expertise in social media management, creating impactful and
              authentic content that resonated with the platform’s audience.
            </div>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <div>jialuzho@usc.edu</div>
          </div>

          <div className={styles.resume}>
            <h3>Resume</h3>
            <a href="./assets/JIALU ZHOU Resume 08:2024.pdf" download="resume">
              Resume
            </a>
          </div>

          <div className={styles.client}>
            <h3>Client</h3>
            <p>IRO Paris</p>
            <a href="https://www.iroparis.com/us?gad_source=1&gclid=CjwKCAjw0aS3BhA3EiwAKaD2ZUfMKdsDDDxxvWqQBYk_mLYuCLLyJeMuPNxnq6jL3MInuL9xQBiuVRoChPIQAvD_BwE" />
          </div>
        </div>
      </section>
    </>
  );
}
