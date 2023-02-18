import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import productImage from '../resources/product.png'
import arrowIcon from '../resources/arrow-icon.png'
import profileThumb from '../resources/profile-thumb.png'
import { Colors, Texts } from './AppTheme'

const ProductDetail = () => {
  return (
    <Container>
      <ProfileImage src={profileThumb} />
      <BackButton>
        <img src={arrowIcon} />
        <BackButtonText>Back<br />Powdur</BackButtonText>
      </BackButton>
      <OverlineText style={Texts.overlineText}>Pure set</OverlineText>
      <AmountText>$65.00</AmountText>
      <ProductImage src={productImage} />
      <Footer />
    </Container>
  )
}

const OverlineText = styled.p`
  color: {Colors.gray};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  margin-top: 24px;
`

const AmountText = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  margin: 0;
  margin-top: 8px;
  font-weight: 600;
  color: {Colors.default};
`

const Container = styled.div`
  display: block;
  padding: 36px;
  margin:auto;
`

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`

const ProductImage = styled.img`
  width: 320px;
  height: 320px;
  margin-top: 48px;
  margin-bottom: 96px;
`

const BackButton = styled.button`
  display: flex;
  border-width: 0;
  background-color: white;
  margin-left: -36px;
  margin-top: 16px;
`

const BackButtonText = styled.p`
  margin: 0;
  margin-left: 12px;
  text-align: left;
`

export default ProductDetail
