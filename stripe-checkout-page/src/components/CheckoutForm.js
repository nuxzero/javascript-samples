import React from 'react'
import styled from 'styled-components'
import { Colors } from './AppTheme'

const CheckoutForm = () => {
  return <Container>
    <PrimaryButton>Pay</PrimaryButton>
    <p>Or pay with card</p>
    <InputLabel>Email</InputLabel>
    <Input></Input>
    <InputLabel>Card number</InputLabel>
    <Input
      placeholder="4242 4242 4242 4242"
      bottomLeftRadius="0px"
      bottomRightRadius="0px"
    ></Input>
    <InlineInputContainer>
      <Input
        placeholder="MM / YY"
        topLeftRadius="0px"
        topRightRadius="0px"
        bottomRightRadius="0px"
      ></Input>
      <Input
        placeholder="CVC"
        topLeftRadius="0px"
        topRightRadius="0px"
        bottomLeftRadius="0px"
      ></Input>
    </InlineInputContainer>
    <InputLabel>Name on card</InputLabel>
    <Input></Input>
    <InputLabel>Country or region</InputLabel>
    <Input
      placeholder="Country"
      bottomLeftRadius="0px"
      bottomRightRadius="0px"
    ></Input>
    <Input
      placeholder="ZIP"
      topLeftRadius="0px"
      topRightRadius="0px"
    ></Input>
    <PrimaryButton>Pay $65.00</PrimaryButton>
  </Container>
}

const Container = styled.div`
  width: 420px;
  margin: auto;
`

const PrimaryButton = styled.button`
  font-size: 18px;
  background-color: black;  
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 48px;
  width: 100%;
  height: 48px;
  background: #000000;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.12), 0px 2px 5px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  border-width: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 32px 0px;
`

const InlineInputContainer = styled.div`
  display: flex;
  width: 50%;
`

const InputLabel = styled.label`
  color: ${Colors.grayText};
  margin-top: 32px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
`

const Input = styled.input`
  padding: 9px 12px;
  height: 40px;
  top: 30px;
  border: 1px solid rgba(60, 66, 87, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  flex: none;
  width: 100%;
  border-top-left-radius: ${props => props.topLeftRadius ? props.topLeftRadius : "8px"};
  border-top-right-radius: ${props => props.topRightRadius ? props.topRightRadius : "8px"};
  border-bottom-left-radius: ${props => props.bottomLeftRadius ? props.bottomLeftRadius : "8px"};
  border-bottom-right-radius: ${props => props.bottomRightRadius ? props.bottomRightRadius : "8px"};
`

export default CheckoutForm
