import React from 'react'
import CheckoutForm from './components/CheckoutForm'
import ProductDetail from './components/ProductDetail'
import styled from 'styled-components'

const CheckoutPage = () => {
  return (
    <Container>
      <ProductDetail />
      <CheckoutFormContainer>
        <CheckoutForm />
      </CheckoutFormContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const CheckoutFormContainer = styled.div`
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.08);
  marign-top: auto;
  margin-bottom: auto;
  height:100%;
`

export default CheckoutPage
