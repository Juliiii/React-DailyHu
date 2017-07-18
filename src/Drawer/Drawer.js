import React from 'react';
import SideBar from '../SideBar/SideBar';
import * as actions from '../Store/actions';
import { Drawer } from 'antd-mobile';
import { connect } from 'react-redux'; 


export const MyDrawer = (props) => {
  return(
    <Drawer className="my-drawer"
            style = {{minHeight: document.documentElement.clientHeight}}
            sidebar={<SideBar />}
            open={props.open}
            onOpenChange={props.showMenu}>
      {list.length ? <ArticlesList data={data} loadMore={this.loadMore} refresh={this.refresh} /> : ''}
    </Drawer>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showMenu: () => {
      dispatch(actions.toggleDrawer());
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.open,
    list: state.list
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer)