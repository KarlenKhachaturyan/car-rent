import classes from "./Ads.module.css";

const Ads: React.FC<{
  bgImage: string;
  image: string;
  imgHeight: string;
}> = ({ bgImage, image, imgHeight }) => {
  return (
    <div className={[classes.ad, classes[`ad_${bgImage}`]].join(" ")}>
      <img src={image} alt="" height={imgHeight} />
    </div>
  );
};

export default Ads;
