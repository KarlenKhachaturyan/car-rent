import Ads from "../components/ads/Ads.tsx";
import classes from "./MainPage.module.css";
import Car1 from "../assets/car1.png";
import Car2 from "../assets/car2.png";
import { useState, useEffect } from "react";
import Card from "../components/card/Card.tsx";

import AdsLoading from "../components/loadings/AdsLoading.tsx";

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <section className={classes.main}>
        <div className={classes["ads-wrap"]}>
          {loading ? (
            <AdsLoading />
          ) : (
            <Ads bgImage="even" image={Car1} imgHeight="116" />
          )}
          {loading ? (
            <AdsLoading />
          ) : (
            <Ads bgImage="odd" image={Car2} imgHeight="108" />
          )}
        </div>
      </section>
      <section className={classes["mb-42"]}>
        <Card />
      </section>
    </>
  );
};

export default MainPage;
