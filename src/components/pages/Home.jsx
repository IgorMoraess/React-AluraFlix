import React from "react";
import Banner from "../layout/Banner";
import HomeContent from "../layout/HomeContent";
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Banner />
      <div className={styles.home}>
        <HomeContent />
      </div>
    </>
  );
}

export default Home;
