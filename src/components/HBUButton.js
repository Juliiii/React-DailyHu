import React from 'react';
import {  Button, Flex } from 'antd-mobile';
// import Hamburg from '../icons/Hamburg.svg';

const HBUButton = (props) => {
    const style = {
        border: "none",
        paddingLeft: "0.5em"
    };

    const activeStyle = {
        backgroundColor: "#ddd" 
    }


    return (
            <Flex justify="start">
                <Button icon={require('../icons/Hamburg.svg')} 
                        size="middle" 
                        type="ghost" 
                        style={style}
                        activeStyle={activeStyle}
                        onClick={props.showMenu.bind(this)}
                />
            </Flex>
    );  

}

export default HBUButton;