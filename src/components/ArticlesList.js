import React, { Component } from 'react'
import ArticlesListItem from './ArticlesListItem';
import { ListView } from 'antd-mobile';
// import MyDrawer from './MyDrawer';


class ArticlesList extends Component {
  constructor (props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.data),
      data: this.props.data
    };
  }

  componentWillReceiveProps (nextProps) {
    // console.log(nextProps.data.length);
    if (nextProps.data !== this.state.data) {
      this.state = {
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
        data: nextProps.data
      };
    }
  }


  render () {
    return(
      <
        ListView renderRow={(rowData) => <ArticlesListItem {...rowData} />}
                 dataSource={this.state.dataSource}
                 useBodyScroll
                 initialListSize={this.props.data.length}
                 onEndReached = {() => console.log(1)}
                 onScroll={() => { console.log('scroll'); }}
                 scrollRenderAheadDistance={500}
                 onEndReachedThreshold={10}
                 scrollEventThrottle={200}
                 useBodyScroll
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                  {this.state.isLoading ? 'Loading...' : 'Loaded'}</div>)}
      />
    );
  }
};

export default ArticlesList;
