import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I&apos;m Afsheen </h1>
      <p className={styles.description}>I am an undergrad at NIT srinagar, persuing B.Tech in information technology.</p>
      <a href="mailto: afsheensajad5@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src = {getImageUrl("hero/heroImage.png")} alt="Hero Image Of Me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>;
}