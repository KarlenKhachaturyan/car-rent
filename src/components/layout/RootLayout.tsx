import { Outlet } from "react-router-dom";
import MainNavigation from "../navigation/MainNavigation";
import Footer from "../footer/Footer";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
