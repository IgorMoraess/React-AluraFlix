import React from "react";
import styles from "./Banner.module.css";
import bannerFoto from '../../assets/banner_foto.png'

const Banner = () => {
  return (
    <>
      <section className={styles.sectionBanner}>
        <div className={styles.pt1}>
          <button disabled="disabled">FRONT END</button>
          <h1>SEO com React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quaerat hic aperiam animi atque, vel repellat dolor ipsum, tempora
            ullam ad iure doloremque ipsam! Reprehenderit sunt soluta nulla vero
            facere!
          </p>
        </div>
        <div className={styles.pt2}>
          <img src={bannerFoto} alt="Foto do Baner" />
        </div>
      </section>
    </>
  );
};

export default Banner;
