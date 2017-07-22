import React from 'react';
import BackButton from '@/components/BakcButton/BackButton';
import Loading from 'react-loading';
import { Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import * as actions from '@/store/actions';

class Detail extends React.Component {

  async componentDidMount () {
    const url= this.props.location.state;
    this.props.getDetail(url);
  }


  render () {
    if (!this.props.isLoading) {
      return (
        <div>
          <BackButton />
          <div className="detail-wrapper" dangerouslySetInnerHTML = {{__html: this.props.__html}} />
        </div>
      );
    } else {
      return (
        <Flex align="center" justify="center" style={{height: "100%"}}>
          <Loading type="bars" color="#311b92" delay={0} height="150px" width="150px" />
        </Flex>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.isLoading,
    __html: state.__html
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetail: (url) => {
      dispatch(actions.getDetail(url))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
