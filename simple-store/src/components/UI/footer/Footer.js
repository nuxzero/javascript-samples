import React from "react";
import styled from "styled-components";
import Data from "../../../Data";
import Box from "../Box";
import AccountThumb from "./AccountThumb";

function Footer() {
  return (
    <FooterContainer>
      <Box
        paddingTop={56}
        paddingLeft={204}
        paddingBottom={64}
        paddingRight={56}
      >
        <Box marginBottom={32}>
          <p>FEATURED ARTISTS</p>
        </Box>
        <ArtistsContainer>
          {Data.artists.map((e) => (
            <Box marginRight={24}>
              <AccountThumb
                name={e.name}
                address={e.address}
                avatar={e.avatar}
              />
            </Box>
          ))}
        </ArtistsContainer>
      </Box>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #f4f4f2;
`;

const ArtistsContainer = styled.div`
  display: flex;
`;

export default Footer;
