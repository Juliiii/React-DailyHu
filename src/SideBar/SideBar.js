import React from 'react';
import SideBarItem from './children/SideBarItem';
import { changeMeta } from '../Store/actions';
import { List } from 'antd-mobile';
import { connect } from 'react-redux';

export const SideBar = (props) => {
    return(
      <List>
        {props.meta.map((item, index) => {
          console.log(item);
          if (index === 0) {
            return <SideBarItem {...item} key={index} onClick={props.changeMeta} styles={{fontSize: "0.8em", marginBottom: "50px"}} />
          } else {
            return <SideBarItem {...item} key={index} onClick={props.changeMeta} />
          }
        })
        }
      </List>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeMeta: (e) => {
      const site = e.target.innerText;
      if (site === 'DailyHu' || site === 'about') return;
      dispatch(changeMeta(site));
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.meta
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);