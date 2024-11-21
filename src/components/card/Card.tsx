import classes from "./Card.module.css";
import { priceConverter } from "../../utils/priceConverter.ts";
import Car from "../../types/Car.js";
import Favorite_empty from "../../assets/favorite_empty.png";
// import Favorite_full from "../../assets/favorite_full.png";
import Gasoline from "../../assets/gasoline.png";
import Gear from "../../assets/gear.png";
import Passengers from "../../assets/passengers.png";
import { Link } from "react-router-dom";

const Card: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className={classes.card}>
      <h6>{car.car_name}</h6>
      <img
        className={classes.heart}
        src={Favorite_empty}
        alt="Add to favorite"
      />
      <p className={classes.type}>{car.car_type}</p>
      <img
        className={classes.main_image}
        src={car.main_image}
        alt={car.car_name}
      />
      <div className={classes.info}>
        <p>
          <img src={Gasoline} alt="Gasoline" />
          {car.gasoline}
        </p>
        <p>
          <img src={Gear} alt="Gear type" />
          {car.steering_type}
        </p>
        <p>
          <img src={Passengers} alt="Capacity" />
          {car.capacity}
        </p>
      </div>
      <div className={classes.priceWrapper}>
        <p className={classes.price}>{priceConverter.format(car.price)}</p>
        <Link to={`/info/${car.id}`} className={classes.rentBtn}>
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
