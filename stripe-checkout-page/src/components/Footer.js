import React from 'react'
import styled from 'styled-components'
import { Texts } from './AppTheme'

const Footer = () => {
  return (
    <div>
      <span style={Texts.captionText}>Power by <strong>stripe</strong>&emsp;&emsp;|&emsp;&emsp;Terms&emsp;&emsp;Privacy</span>
    </div>
  )
}

export default Footer
