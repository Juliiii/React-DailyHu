import * as actionTypes from './actonTypes';
import axios from 'axios';
import { Toast } from 'antd-mobile';


export const toggleDrawer = () => ({
    type: actionTypes.OPENDRAWER,
    props: 'open'
});

export const toggleHasMore = (hasMore) => ({
  type: actionTypes.TOGGLEHASMORE,
  hasMore
});

export const toggleIsLoading = () => ({
  type: actionTypes.TOGGLEISLOADING,
  props: 'isLoading'
});

export const toggleIsRefresh = () => ({
  type: actionTypes.TOGGLEISREFRESH,
  props: 'isRefresh'
});


const changeMetaStart = () => ({
  type: actionTypes.CHANGEMETA_START,
  props: 'list'
});

const changeMetaSuccess = (list, site) => ({
  type: actionTypes.CHANGEMETA_SUCCESS,
  list,
  props: 'list',
  page: 1,
  site: site
});

const changeMetaFail = () => ({
  type: actionTypes.CHANGEMETA_FAIL
});

const getMetaStart = () => ({
  type: actionTypes.GETMETA_START
});

const getMetaSuccess = (meta) => ({
  type: actionTypes.GETMETA_SUCCESS,
  props: 'meta',
  meta
});

const getMetaFail = () => ({
  type: actionTypes.GETMETA_FAIL
});


const loadMoreStart = () => ({
  type: actionTypes.LOADMORE_START
});

const loadMoreSuccess = (list, page) => ({
  type: actionTypes.LOADMORE_SUCCESS,
  page,
  list,
  props: 'list'
});

const loadMoreFail = () => ({
  type: actionTypes.LOADMORE_FAIL
});


const refreshFail = () => ({
  type: actionTypes.REFRESH_START
});

const refreshStart = () => ({
  type: actionTypes.REFRESH_SUCCESS
});

const refreshSuccess = (list) => ({
  type: actionTypes.REFRESH_FAIL,
  list,
  props: 'list'
});


export const changeMeta = (site) => async (dispatch) => {
  dispatch(changeMetaStart());
  dispatch(toggleHasMore(true));
  dispatch(toggleDrawer());
  Toast.loading('Loading...', 0, null);
  try {
    const list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${1}`
    })).data;
    Toast.hide();
    dispatch(changeMetaSuccess(list, site));
  } catch (ex) {
    dispatch(changeMetaFail());
  }
}


export const getMeta = () => async (dispatch) => {
  dispatch(getMetaStart());
  try {
    let meta = (await axios({
      method: 'get',
      url: '/meta'
    })).data;
    meta = [
      {name: "DailyHu"}, 
      ...meta, 
      {name: "about", icon: "http://wx3.sinaimg.cn/mw1024/a0b59701ly1fhn4nsq571j202g02gjr8.jpg"}
    ];
    dispatch(getMetaSuccess(meta, 'meta'));
  } catch (ex) {
    dispatch(getMetaFail());
  }
}

export const loadMore = (site, page) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  dispatch(loadMoreStart());
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${++page}`
    })).data;
    if (list.length === 0) {
      dispatch(toggleHasMore(false));
    } else {
      dispatch(loadMoreSuccess(list, page));
    }
    dispatch(toggleIsLoading(false));
  } catch (ex) {
    dispatch(loadMoreFail());
    dispatch(toggleIsLoading(false));
  }
}

export const refresh = (site) => async (dispatch) => {
  dispatch(toggleIsRefresh());
  dispatch(refreshStart());
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${1}`
    })).data;
    dispatch(refreshSuccess(list));
    Toast.success('已经最新！', 1);
  } catch (ex) {
    dispatch(refreshFail());
  }
  dispatch(toggleIsRefresh());
}
