import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className={classes.footerWrapper}>
        <div>
          <img
            className={classes.mainIcon}
            src={Logo}
            alt="Morent"
            width={"131"}
            height={"25"}
            loading="eager"
          />
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className={classes.linkWrapper}>
          <div>
            <h3>About</h3>
            <ul>
              <li>
                <Link to="/about">How it works</Link>
              </li>
              <li>
                <Link to="/about">Featured</Link>
              </li>
              <li>
                <Link to="/about">Partnership</Link>
              </li>
              <li>
                <Link to="/about">Business Relocation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <Link to="/about">Events</Link>
              </li>
              <li>
                <Link to="/about">Blog</Link>
              </li>
              <li>
                <Link to="/about">Podcast</Link>
              </li>
              <li>
                <Link to="/about">Invite a friend</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Socials</h3>
            <ul>
              <li>
                <Link to="/about">Discord</Link>
              </li>
              <li>
                <Link to="/about">Instagram</Link>
              </li>
              <li>
                <Link to="/about">Twitter</Link>
              </li>
              <li>
                <Link to="/about">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <div>©2022 MORENT. All rights reserved</div>
        <div className={classes.privacyLinks}>
          <Link to="/privacy"> Privacy & Policy</Link>
          <Link to="/terms"> Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
