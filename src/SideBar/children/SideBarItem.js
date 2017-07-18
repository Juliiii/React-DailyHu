import React from 'react';
import { List } from 'antd-mobile'


const SliderBarItem = (props) => {
    return (
     <List.Item thumb={props.icon}
                 onClick={props.onClick}
                 style={props.styles}>
         {props.name}
     </List.Item>
    );
}

export default SliderBarItem;

