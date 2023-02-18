import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Fonts from "../../../theme/Fonts";
import Colors from "../../../theme/Colors";

const ProductItem = ({ product }) => {
  const { title, subtitle, shortDescription, image } = product;
  return (
    <Container>
      <ProductImage src={image} alt={image} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Caption>{shortDescription}</Caption>
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff;
  font-weight: ${Fonts.bold};
`;

const ProductImage = styled.img`
  width: 240px;
`;

const Title = styled.div`
  font-weight: ${Fonts.medium};
  color: ${Colors.black};
  font-size: 16px;
`

const Subtitle = styled.div`
  font-weight: ${Fonts.medium};
  color: ${Colors.grey};
  font-size: 14px;
`

const Caption = styled.div`
  font-weight: ${Fonts.regular};
  color: ${Colors.grey};
  font-size: 14px;
`

ProductItem.propTypes = {
  product: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    shortDescription: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ProductItem;
