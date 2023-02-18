import React from "react";
import styled from "styled-components";
import Box from "../../UI/Box";
import ProductItem from "../../UI/products/ProductItem";
import Template from "../../UI/Template";
import Data from "../../../Data"

const HomePage = () => {
  return <Template content={products()} />;
};

const products = () => {
  return (
    <div>
      <Box marginLeft={208} marginTop={56}>
        <LargeTitle>Featured Paintings</LargeTitle>
      </Box>
      <ProductsContainer>
        {Data.products.map((e) => (
          <Box
            marginTop={56}
            marginLeft={56}
            marginBottom={56}
            marginRight={56}
          >
            <ProductItem product={e} />
          </Box>
        ))}
      </ProductsContainer>
    </div>
  );
};

const LargeTitle = styled.h1`
  font-size: 52px;
  font-weight: 500;
`;

const ProductsContainer = styled.div`
  display: flex;
`;

export default HomePage;
