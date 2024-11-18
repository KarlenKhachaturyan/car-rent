import { useEffect, useState } from "react";
import SearchNavigation from "./SearchNavigation";
import classes from "./MainNavigation.module.css";
import Logo from "../../assets/Logo.png";
import HeartImage from "../../assets/heart.png";
import NotificationImage from "../../assets/notification.png";
import SettingsImage from "../../assets/settings.png";
import ProfileImage from "../../assets/profile.png";
import ProfIconFallback from "../loadings/ProfIcon";
import useWindow from "../../helpers/useWindow";

const MainNavigation: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const windowSize = useWindow();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className={classes.navigation}>
      <meta name="keywords" content="React" />
      <div className={classes.iconSearch}>
        <img
          className={classes.mainIcon}
          src={Logo}
          alt="Morent"
          width={"131"}
          height={"25"}
          loading="eager"
        />
        <SearchNavigation loading={loading} />
      </div>

      <div className={classes.profIconWrapper}>
        {loading && windowSize.width > 1080 ? (
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

        {loading && windowSize.width > 1080 ? (
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
        {loading && windowSize.width > 1080 ? (
          <ProfIconFallback />
        ) : (
          <div className={classes.profIcon}>
            <img width="24" height="24" src={SettingsImage} alt="Settings" />
          </div>
        )}
        {loading ? (
          <ProfIconFallback />
        ) : (
          <div className={classes.profIcon}>
            <img src={ProfileImage} alt="ProfileImage" />
          </div>
        )}
      </div>
    </main>
  );
};

export default MainNavigation;
