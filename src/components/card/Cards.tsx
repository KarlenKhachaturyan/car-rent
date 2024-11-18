import Card from "./Card.tsx";
import Car from "../../types/Car.ts";

import classes from "./Cards.module.css";

const Cards: React.FC<{ data: Car[]; label: string }> = ({ data, label }) => {
  return (
    <section className={classes.main}>
      <h4>{label}</h4>
      <div className={classes.cardWrapper}>
        {data.map((car: Car) => {
          return <Card key={car.id} car={car} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
