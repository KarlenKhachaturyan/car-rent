import { useEffect, useState } from "react";
import SearchNavigation from "./SearchNavigation";
import classes from "./Nav.module.css";
import Logo from "../../assets/Logo.png";
import HeartImage from "../../assets/heart.png";
import NotificationImage from "../../assets/notification.png";
import SettingsImage from "../../assets/settings.png";
import ProfileImage from "../../assets/profile.png";
import ProfIconFallback from "../loadings/ProfIcon";

const Nav: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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

        <SearchNavigation />
      </div>

      <div className={classes.profIconWrapper}>
        {loading ? (
          <ProfIconFallback />
        ) : (
          <div className={classes.profIcon}>
            <img
              width="24"
              height="24"
              src={HeartImage}
              alt="Favorites"
              loading="lazy"
            />
          </div>
        )}

        {loading ? (
          <ProfIconFallback />
        ) : (
          <div className={classes.profIcon}>
            <img
              width="24"
              height="24"
              src={NotificationImage}
              alt="Notifications"
            />
          </div>
        )}
        {loading ? (
          <ProfIconFallback />
        ) : (
          <div className={classes.profIcon}>
            <img width="24" height="24" src={SettingsImage} alt="Settings" />
          </div>
        )}
        <div className={classes.profIcon}>
          <img src={ProfileImage} alt="ProfileImage" />
        </div>
      </div>
    </main>
  );
};

export default Nav;
