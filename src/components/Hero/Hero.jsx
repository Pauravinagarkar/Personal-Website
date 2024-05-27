import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"; // Ensure this path is correct
//import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  

  

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm PAURAVI</h1>
        <p className={styles.description}>
          I am a Software Developer, with almost 2 years of corporate experience.
        </p>
        <a href="mailto:pnagarkar02@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <video className={styles.heroVideo} autoPlay loop muted >
          <source src={getImageUrl("hero/heroVideo.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </section>
  );
};
