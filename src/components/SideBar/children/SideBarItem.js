import React from 'react';
import { List } from 'antd-mobile'
import { Link } from 'react-router';

const SliderBarItem = (props) => {
    console.log(props);
    if (props.link) {
        return (
        <Link to="/about">
            <List.Item thumb={props.icon}
                        onClick={props.onClick}
                        style={props.styles}>
                {props.name}
            </List.Item>
        </Link>
        );
    }
    return (
        <List.Item thumb={props.icon}
                    onClick={props.onClick}
                    style={props.styles}>
            {props.name}
        </List.Item>
    );
}

export default SliderBarItem;

