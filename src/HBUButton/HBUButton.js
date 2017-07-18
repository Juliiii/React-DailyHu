import React from 'react';
import { Button, Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import * as actions from './actions.js';
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
        <div className="buttonWrapper">
            <Flex justify="start">
                <Button icon={require('../icons/Hamburg.svg')} 
                        size="middle" 
                        type="ghost" 
                        style={style}
                        activeStyle={activeStyle}
                        onClick={props.showMenu}
                />
            </Flex>
        </div>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showMenu: () => {
            dispatch(actions.toggleDrawer())
        }
    };
}

export default connect(null, mapDispatchToProps)(HBUButton);
