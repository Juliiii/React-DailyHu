import React from 'react';
import axios from 'axios'
import BackButton from '../components/BakcButton/BackButton';
import Loading from 'react-loading';
import { Flex } from 'antd-mobile';

class Detail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      _html: '',
      isLoading: true
    };
  }


  async componentDidMount () {
    const url=this.props.location.state;
    const _html = (await axios({
      method: 'get',
      url: `/detail?url=${url}`
    })).data;
    this.setState({
      _html,
      isLoading: false
    })
  }


  render () {
    if (!this.state.isLoading) {
      return (
        <div>
          <BackButton />
          <div className="detail-wrapper" dangerouslySetInnerHTML = {{__html: this.state._html}} />
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


export default Detail;

