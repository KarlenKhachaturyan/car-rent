import classes from "./App.module.css";
import Logo from "./assets/Logo.png";
import SearchImage from "./assets/search.png";
import FilterImage from "./assets/filter.png";
import HeartImage from "./assets/heart.png";
import NotificationImage from "./assets/notification.png";
import SettingsImage from "./assets/settings.png";
import ProfileImage from "./assets/proifle-image.png";

function App() {
  return (
    <main className={classes.navigation}>
      <div className={classes.iconSearch}>
        <img
          className={classes.mainIcon}
          src={Logo}
          alt="Morent"
          width={"131"}
          height={"25"}
          loading="eager"
        />
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
      </div>

      <div className={classes.profIconWrapper}>
        <div className={classes.profIcon}>
          <img
            width="24"
            height="24"
            src={HeartImage}
            alt="Favorites"
            loading="lazy"
          />
        </div>
        <div className={classes.profIcon}>
          <img
            width="24"
            height="24"
            src={NotificationImage}
            alt="Notifications"
          />
        </div>
        <div className={classes.profIcon}>
          <img width="24" height="24" src={SettingsImage} alt="Settings" />
        </div>
        <div className={classes.profIcon}>
          <img src={ProfileImage} alt="ProfileImage" />
        </div>
      </div>
    </main>
  );
}

export default App;
