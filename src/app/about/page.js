"use client";

import Typewriter from "../components/Typewriter";
import React from "react";
import styles from "@/app/styles/about.module.css";

export default function About() {
  const [showDescription, setShowDescription] = React.useState(false);
  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <>
  

      <section className={styles.portfolioHeader}>
        <div className={`${styles.photo} ${styles.photo3}`}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            <Typewriter text={"Janice"} speed="150" />
            
              <p>
                I am currently pursuing a Master of Science in Integrated
                Design, Business, and Technology at the University of Southern
                California, building on my Bachelor of Arts in Business
                Management and my Associate of Arts in Merchandise Product
                Development. 
              </p>
           
          </div>
        </div>
      </section>

      <section className={`${styles.portfolioHeader} ${styles.portfolioHeaderReverse}`}>
        <div className={`${styles.photo} ${styles.photo2}`}></div>
        <div className={`${styles.content}`}>
          <div className={styles.title}>
            <Typewriter text={"Janice"} speed="150" />
            
              <p>
                My academic and professional experiences have
                helped me combine creativity, strategy, and product development,
                particularly in the fashion and social media industries. Outside
                of my professional pursuits, I am a sports enthusiast who loves
                engaging in a variety of outdoor activities. 
              </p>
           <br><br>
          </div>
        </div>
      </section>

      <section className={styles.portfolioHeader}>
        <div className={`${styles.photo} ${styles.photo1}`}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            <Typewriter text={"Janice"} speed="150" />
            
              <p>
                I also enjoy
                spending time with my two beloved pets: a sweet Ragdoll cat and
                a lively Pomeranian dog, who bring joy and energy into my
                everyday life.
              </p>
           
          </div>
        </div>
      </section>

      

      
    </>
  );
}
