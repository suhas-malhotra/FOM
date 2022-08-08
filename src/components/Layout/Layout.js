import { Fragment } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <Header aboutOverlay={aboutOverlay} />
      {children}
      <Footer footerBgClass={footerBgClass} />
    </Fragment>
  );
};

export default Layout;
