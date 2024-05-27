import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="just me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                <ul>
                  <li>Developed the frontend of a movie review platform using React JS and Tailwind CSS, focusing on user engagement and ease of navigation.</li>
                  <li>Designed and implemented a user-friendly web interface for a weather forecasting service. Utilized Python with Flask, JavaScript, HTML/CSS, and integrated open APIs for real-time data retrieval.</li>
                  <li>I also have experience with coding & designing Android App. My goto languages are JavaScript, React, Node.js, HTML & CSS.</li>
                  <li>I solely created this website.</li>
                </ul>

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              <ul>
                  <li>I have experience developing fast and optimised back-end systems and APIs</li>
                  <li>Crafted Node.js/Express RESTful APIs for an e-commerce platform, supporting product management and secure user interactions. Enhanced performance and scalability, ensuring smooth frontend integration.</li>
                  <li>Implemented a pub/sub model using WebSocket for instant weather updates and alerts, integrating third-party APIs for real-time forecasts</li>
                  <li>Engineered a backend system in Flask to process and analyze large volumes of financial data, providing users with valuable insights into market trends.</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering</h3>
              <p>
              <ul>
                  <li>I have designed multiple landing pages and have created design systems as well</li>
                  <li>Utilized Python, PySpark, SQL, and AWS technologies to analyze and predict student retention rates, supporting strategic academic decisions.</li>
                  <li>Developed a real-time data pipeline using Apache Kafka and AWS to process and analyze stock market trends.</li>
                  <li> Implemented a library for geospatial operations in Python and Spark, optimizing performance on AWS clusters.</li>
                </ul>
                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
