import React from 'react';
import { List } from 'antd-mobile'


const SliderItem = (props) => {
    return (
     <List.Item  thumb={props.src}
                 multipleLine
                 onClick={this.props.onClick.bind(this)}>
         {props.extra}
     </List.Item>
    );
}

export default SliderItem;