import React from "react";
import PropTypes from "prop-types";
import TopBar from "./topBar/TopBar";
import Footer from "./footer/Footer";

const Template = ({ topBar = defaultTopBar, content }) => {
  return (
    <div>
      {topBar}
      <div>{content}</div>
      <Footer />
    </div>
  );
};

const defaultTopBar = <TopBar />;

Template.propTypes = {
  content: PropTypes.object,
};

export default Template;
