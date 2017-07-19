import React from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router';
const style = {
    border: "none",
    paddingLeft: "0.5em",
    position: 'absolute',
    top: "0",
    left: "0"
};

const activeStyle = {
    backgroundColor: "#eee"
}
export const BackButton = (props) => {
  return(
    <Link to="/">
      <Button icon={require('../../icons/back.svg')}
              size="middle"
              type="ghost"
              style={style}
              activeStyle={activeStyle}
      />
    </Link>
  )
}

export default BackButton;