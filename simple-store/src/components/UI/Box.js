import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Box({
  children,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) {
  return (
    <Container
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-right: ${(props) => props.marginRight}px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-left: ${(props) => props.paddingLeft}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
  padding-right: ${(props) => props.paddingRight}px;
`;

Box.propTypes = {
  children: PropTypes.object,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
};

Box.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

export default Box;
