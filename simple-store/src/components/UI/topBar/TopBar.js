import React from "react";
import styled from "styled-components";
import Box from "../Box";
import TopBarItem from "./TopBarItem";
import logo from "../../../logo.png";

const TopBar = () => {
  return (
    <Box marginTop={56} marginLeft={104} marginBottom={56} marginRight={104}>
      <TopBarLogoContainer>
        <LogoImage src={logo} alt="logo" />
        <Box marginLeft={10}>
          <p>cultured kid.</p>
        </Box>
      </TopBarLogoContainer>
      <TopBarItemsContainer>
        {items.map((e) => (
          <Box marginLeft={24}>
            <TopBarItem title={e.title} linkTo={e.linkTo} />
          </Box>
        ))}
      </TopBarItemsContainer>
    </Box>
  );
};

const items = [
  {
    title: "Paintings",
    linkTo: "paintings",
  },
  {
    title: "Drawings",
    linkTo: "drawings",
  },
  {
    title: "Sculpture",
    linkTo: "sculpture",
  },
  {
    title: "Artists",
    linkTo: "artists",
  },
];

const LogoImage = styled.img`
  width: 20px;
  height: 100%;
`;

const TopBarLogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const TopBarItemsContainer = styled.div`
  display: flex;
  float: right;
`;

export default TopBar;
