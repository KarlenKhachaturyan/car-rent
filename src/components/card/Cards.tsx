import Card from "./Card.tsx";
import Car from "../../types/Car.ts";
import { useState, useEffect } from "react";
import classes from "./Cards.module.css";
import CardLoading from "../loadings/CardLoading.tsx";
const Cards: React.FC<{ data: Car[]; label: string }> = ({ data, label }) => {
  const [cars, setCars] = useState<Car[]>();
  useEffect(() => {
    const timer = setTimeout(() => {
      setCars(data);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <section className={classes.main}>
      <h4>{label}</h4>
      <div className={classes.cardWrapper}>
        {cars
          ? cars.map((car: Car) => <Card key={car.id} car={car} />)
          : Array.from({ length: 4 }).map((_, index) => (
              <CardLoading key={index} />
            ))}
      </div>
    </section>
  );
};

export default Cards;
