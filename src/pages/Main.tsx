import { useState, useEffect } from "react";

import Ads from "../components/ads/Ads.tsx";
import AdsLoading from "../components/loadings/AdsLoading.tsx";
import Car1 from "../assets/car1.png";
import Car2 from "../assets/car2.png";
import Cards from "../components/card/Cards.tsx";
import DUMMY_CARS from "../data/dummyCars.ts";

import classes from "./MainPage.module.css";

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

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
            <Ads
              title="The Best Platform for Car Rental"
              description="Ease of doing a car rental safely and reliably. Of course at a low price."
              bgImage="even"
              image={Car1}
              imgHeight="116"
            />
          )}
          {loading ? (
            <AdsLoading />
          ) : (
            <Ads
              title="Easy way to rent a car at a low price"
              description="Providing cheap car rental services and safe and comfortable facilities."
              bgImage="odd"
              image={Car2}
              imgHeight="108"
            />
          )}
        </div>
      </section>
      <Cards label="Popular Cars" data={DUMMY_CARS} />
      <Cards label="Recomendation Cars" data={DUMMY_CARS} />
    </>
  );
};

export default MainPage;
