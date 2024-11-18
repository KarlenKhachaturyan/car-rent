import classes from "./CardLoading.module.css";
const Card: React.FC = () => {
  return (
    <div className={classes.card}>
      <h6></h6>
      <p className={classes.type}></p>
      <div className={classes.main_image} />
      <div className={classes.info} />
      <div className={classes.priceWrapper} />
    </div>
  );
};

export default Card;
