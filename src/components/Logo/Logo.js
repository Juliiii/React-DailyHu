import React from 'react'
import logo from './logo.png';
import { Flex } from 'antd-mobile';

export const Logo = (props) => {
  return(
    <Flex align="center" 
          justify="center" 
          direction="column" 
          style={
            {
              height: document.documentElement.clientHeight || document.body.clientHeight,
              width: document.documentElement.clientWidth || document.body.clientWidth,
              position: "absolute",
              top: "0",
              left: "0"
            }
          }
    >
      <img src={logo} alt="logo" />
      <p style={{fontSize: '48px'}}>DailyHu </p>
    </Flex>
  )
}

export default Logo;