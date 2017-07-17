import React, { Component } from 'react'
import ArticlesListItem from './ArticlesListItem';
import { ListView } from 'antd-mobile';
// import MyDrawer from './MyDrawer';

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}


class ArticlesList extends Component {
  constructor (props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.data),
      isLoading: false,
      isRefresh: false
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data !== this.state.data) {
      this.state = {
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
      };
    }
  }

  async loadMore () {
    // console.log('1');
    if (!this.state.isLoading) {
      this.setState({
        isLoading: true
      });
      await this.props.loadMore();
      this.setState({
        isLoading: false
      });
    }
  }


  render () {
    return(
      <
        ListView renderRow={(rowData) => <ArticlesListItem {...rowData} />}
                  dataSource={this.state.dataSource}
                  initialListSize={this.props.data.length}
                  onEndReached = {this.loadMore}
                  onEndReachedThreshold={0}
                  scrollEventThrottle={500}
                  renderBodyComponent={() => <MyBody />}
                  style={{
                    overflow: "auto",
                    height: "100%"
                  }}

      />
    );
  }
};

export default ArticlesList;
