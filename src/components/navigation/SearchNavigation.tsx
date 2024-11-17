import SearchImage from "../../assets/search.png";
import FilterImage from "../../assets/filter.png";
import classes from "./SearchNavigation.module.css";
const SearchNavigation: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div className={classes.searchWrappper}>
      <img
        className={classes["icon_img"]}
        src={SearchImage}
        width={24}
        height={24}
        alt="Search here"
        loading="lazy"
      />
      <input
        disabled={loading}
        type="text"
        className={classes.searchInput}
        placeholder=" Search here..."
      />
      <img
        className={classes["icon_img"]}
        src={FilterImage}
        width={24}
        height={24}
        alt="Search here"
        loading="lazy"
      />
    </div>
  );
};

export default SearchNavigation;
