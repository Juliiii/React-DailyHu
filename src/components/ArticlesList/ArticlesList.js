import React from 'react'
import ArticlesListItem from './children/ArticlesListItem';
import ArticlesListFooter from './children/ArticlesListFooter';
import { ListView, RefreshControl } from 'antd-mobile';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

/*function MyBody(props) {
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
      <div style={{ margin: '0 auto', width: '96%' }}>
        <ListView renderRow={(rowData) => <ArticlesListItem {...rowData} />}
                    dataSource={this.state.dataSource}
                    initialListSize={this.props.data.length}
                    onEndReached = {this.loadMore}
                    onScroll = {() => console.log()}
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
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)*/



function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}


class ArticlesList extends React.Component {
  constructor(props) {
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

  loadMore () {
    if (!this.props.isLoading && this.props.hasMore) {
      this.props.loadMore(this.props.site, this.props.page);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data !== this.state.data) {
      this.state = {
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
      };
    }
  }

  refresh () {
    if (!this.props.isRefresh) {
      this.props.refresh(this.props.site);
    }
  }
  render() {

    return (
    <div>
      <ListView
        dataSource={this.state.dataSource}
        style={{
          height: document.documentElement.clientHeight || document.body.clientHeight,
          overflow: 'auto',
          border: '1px solid #ddd',
        }}
        scrollEventThrottle={500}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0}
        onScroll={() => console.log(1)}
        initialListSize={this.props.data.length}
        renderFooter={() => <ArticlesListFooter isLoading={this.props.isLoading} />}
        refreshControl={<RefreshControl refreshing={this.props.isRefresh} onRefresh={this.refresh} />}
        renderBodyComponent={() => <MyBody />}
        renderRow={(rowData) => <ArticlesListItem {...rowData} />}
      />
    </div>);
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);