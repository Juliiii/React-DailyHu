import React, { Component } from 'react'
import ArticlesListItem from './children/ArticlesListItem';
import ArticlesListFooter from './children/ArticlesListFooter.js';
import { ListView, RefreshControl } from 'antd-mobile';
import { connect } from 'react-redux';
import * as actions from '../Store/actions';

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
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
      dataSource: dataSource.cloneWithRows(this.props.data)
    };
    this.loadMore = this.loadMore.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data !== this.state.data) {
      this.state = {
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
      };
    }
  }

  loadMore () {
    if (!this.props.isLoading && this.props.hasMore) {
      this.props.loadMore(this.props.site, this.props.page);
    }
  }

  refresh () {
    this.props.refresh(this.props.site);
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
                  renderFooter={() => <ArticlesListFooter isLoading={this.props.isLoading} />}
                  refreshControl={<RefreshControl refreshing={this.props.isRefresh} onRefresh={this.refresh} />}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.list,
    site: state.site,
    page: state.page,
    isLoading: state.isLoading,
    isRefresh: state.isRefresh,
    hasMore: state.hasMore
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadMore: (site, page) => {
      dispatch(actions.loadMore(site, page))
    },
    refresh: (site) => {
      dispatch(actions.refresh(site))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)