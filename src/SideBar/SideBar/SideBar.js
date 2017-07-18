import React from 'react';
import SideBarItem from './SideBarItem';
import { List } from 'antd-mobile';


export const SliderBar = (props) => {
    return(
      <List>
        {props.meta.map((item, index) => {
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

export default SliderBar;