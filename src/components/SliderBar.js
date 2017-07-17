import React from 'react';
import SliderBarItem from './SliderBarItem';
import { List } from 'antd-mobile';


export const SliderBar = (props) => {
    return(
        <List>
            {props.meta.map((item, index) => <SliderBarItem {...item} key={index} onClick={props.changeMeta}/>)}
        </List>
    );
}

export default SliderBar;