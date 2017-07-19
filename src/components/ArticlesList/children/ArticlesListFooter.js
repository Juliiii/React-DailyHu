import React from 'react';
import ReactLoading from 'react-loading';
import { Flex } from 'antd-mobile';

const ArticlesListFooter = (props) => {
  return (
    <Flex justify="center">
      <div style={{height: "80px"}}>
        {props.isLoading ? <ReactLoading type="bars" color="#311b92" delay={0} height="80px" width="80px"/> : <p>已经到达底部</p>}
      </div>
    </Flex>
  );
}

export default ArticlesListFooter;