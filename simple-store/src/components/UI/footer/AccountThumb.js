import React from "react";
import styled from "styled-components";
import Box from "../Box";

function AccountThumb({ name, address, avatar }) {
  return (
    <AccountThumbContainer>
      <AccountThumbImage src={avatar} alt={name} />
      <AccountThumbContent>
        <Box marginLeft={24}>
          <AccountTitle>{name}</AccountTitle>
          <AccountSubtitle>{address}</AccountSubtitle>
        </Box>
      </AccountThumbContent>
    </AccountThumbContainer>
  );
}

const AccountThumbContainer = styled.div`
  width: 325px;
  display: flex;
  align-items: start;
  border: 1px solid rgba(101, 99, 95, 0.2);
`;

const AccountThumbImage = styled.img`
  object-fit: center;
  width: 80px;
  height: 80px;
`;

const AccountThumbContent = styled.div`
  margin: auto 0;
`;

const AccountTitle = styled.p`
  font-weight: 500;
  color: #161412;
`;

const AccountSubtitle = styled.p`
  font-weight: 300;
  color: #65635F;
`;

export default AccountThumb;
