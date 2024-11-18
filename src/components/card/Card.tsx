import classes from "./Card.module.css";
import { priceConverter } from "../../utils/priceConverter.js";

const Card: React.FC = () => {
  return (
    <div className={classes.card}>
      <h6>Car Name</h6>
      <p>Car type</p>
      <img src="" alt="" />
      <div className={classes.info}></div>
      <div>
        <p>{priceConverter.format(29)}</p>
        <button className={classes.rentBtn}>Rent Now</button>
      </div>
    </div>
  );
};

export default Card;
