import Image from "next/image";
import styles from "@/app/styles/interests.module.css";
import LikeButton from "../components/LikeButton";

export default function Interests() {
  return (
    <>
      <section className={styles.interestSection}>
        <div className={styles.interestWrapper}>
          <Image
            className={styles.img}
            src="/assets/snowboarding.jpg"
            alt="snowboarding"
            height="300"
            width="200"
            objectFit="cover"
          />
          <div className={styles.contentWrapper}>
            <h3 className={styles.sectionHeader} >Snowboarding</h3>
            <p className={styles.text}>
              Snowboarding is one of my greatest passions. The thrill of carving
              through fresh snow and the sense of freedom on the mountain
              energizes me like nothing else. Being out in the crisp, open air
              and challenging myself on the slopes brings both excitement and a
              deep connection with nature. Snowboarding is not just a sport for
              me, but a way to refresh my mind and embrace the beauty of winter
              landscapes.
            </p>
            <LikeButton />
          </div>
        </div>

        <div className={styles.interestWrapper}>
          <Image
            className={styles.img}
            src="/assets/freedive.jpg"
            alt="freedive"
            height="300"
            width="200"
            objectFit="cover"
          />
          <div className={styles.contentWrapper}>
            <h3 className={styles.sectionHeader} >Free Diving</h3>
            <p className={styles.text}>
              I am an AIDA 3-star certified freediver, with the ability to hold
              my breath underwater for 4 minutes and 30 seconds. Freediving
              gives me an incredible sense of calm and focus. Interestingly,
              despite my abilities, I have a deep-sea fear that adds an
              unexpected layer of challenge to the experience. It’s a
              fascinating balance of pushing limits while confronting personal
              fears, which makes the sport all the more rewarding for me.
            </p>
            <LikeButton />
          </div>
        </div>
      </section>

      <section className={styles.interestSection}>
        <div className={styles.interestWrapper}>
          <Image
            className={styles.img}
            src="/assets/hiking.jpg"
            alt="styling"
            height="300"
            width="200"
            objectFit="cover"
          />
          <div className={styles.contentWrapper}>
            <h3 className={styles.sectionHeader} >Hiking</h3>
            <p className={styles.text}>
              I am an avid hiker, and being immersed in nature brings me a sense
              of peace and joy. The rhythm of the trails and the beauty of the
              outdoors provide a perfect escape and refresh my mind. Hiking
              allows me to stay active while also reconnecting with the natural
              world, which is something I truly cherish.
            </p>
            <LikeButton />
          </div>
        </div>

        <div className={styles.interestWrapper}>
          <Image
            className={styles.img}
            src="/assets/styling.jpg"
            alt="styling"
            height="300"
            width="200"
            objectFit="cover"
          />
          <div className={styles.contentWrapper}>
            <h3 className={styles.sectionHeader} >Styling</h3>
            <p className={styles.text}>
              Styling is one of my creative outlets, allowing me to express
              individuality and bring out the best in fashion. I enjoy playing
              with textures, colors, and trends to create looks that tell a
              story. Whether it’s for everyday wear or a special project,
              styling gives me the opportunity to blend art with functionality,
              which fuels my passion for fashion.
            </p>
            <LikeButton />
          </div>
        </div>
      </section>
    </>
  );
}
