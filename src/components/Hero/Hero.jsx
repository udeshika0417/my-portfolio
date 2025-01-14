import React from "react";
import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils.js"

export const Hero = () =>{
 
    return (
      <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Udeshika</h1>
        <p className={styles.description}>
        An innovative, responsible, self-motivated person, who likes to work in terms and to be a part of the challenging
team which strives for the better growth of the organization and which explores my potential and provides me
with the opportunity to enhance my talents and get experience with and intention to be an worthy asset to the
company.
        </p>
        <a href="udeshikarmu@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/my-photo.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
      </section>

    )
 
};
