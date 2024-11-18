import classes from "./Ads.module.css";

const Ads: React.FC<{
  bgImage: string;
  image: string;
  imgHeight: string;
  title: string;
  description: string;
}> = ({ bgImage, image, imgHeight, title, description }) => {
  return (
    <div className={[classes.ad, classes[`ad_${bgImage}`]].join(" ")}>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
      <button className={classes.rent_btn}>Rent Now</button>
      <img src={image} alt="" height={imgHeight} />
    </div>
  );
};

export default Ads;
