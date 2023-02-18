import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TopBarItem = ({ title, linkTo }) => {
  return (
    <Container>
      <a>{title}</a>
    </Container>
  );
};

TopBarItem.propTypes = {
  title: PropTypes.string,
  linkTo: PropTypes.string,
};

const Container = styled.li`
  list-style-type: none;
`;

export default TopBarItem;
