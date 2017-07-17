import React from 'react';
import { List } from 'antd-mobile'


const SliderBarItem = (props) => {
    return (
     <List.Item thumb={props.src}
                 multipleLine
                 onClick={props.onClick}>
         {props.extra}
     </List.Item>
    );
}

export default SliderBarItem;