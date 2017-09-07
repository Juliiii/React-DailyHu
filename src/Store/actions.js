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

export const HideLogo = (showLogo) => ({
  type: actionTypes.SHOWLOGO,
  showLogo
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
  type: actionTypes.REFRESH_FAIL
});

const refreshStart = () => ({
  type: actionTypes.REFRESH_START
});

const refreshSuccess = (list) => ({
  type: actionTypes.REFRESH_SUCCESS,
  list,
  props: 'list'
});

const getDetailFail = () => ({
  type: actionTypes.GETDETAIL_FAIL
});

const getDetailStart = () => ({
  type: actionTypes.GETDETAIL_START
});

const getDetailSuccess = (__html) => ({
  type: actionTypes.GETDETAIL_SUCCESS,
  __html,
});

function dbSave (payload) {
  const entries = Object.entries(payload);
  for (const entry of entries) {
    localStorage.setItem(entry[0], JSON.stringify(entry[1]));
  }
}


export const changeMeta = (site) => async (dispatch) => {
  dispatch(changeMetaStart());
  dispatch(toggleHasMore(true));
  dispatch(toggleDrawer());
  dispatch(HideLogo(false));
  Toast.loading('Loading...', 0, null);
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${0}`
    })).data;
    dbSave({
      list,
      page: 0,
      site
    });
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

export const loadMore = (site, page) => async (dispatch, getState) => {
  dispatch(toggleIsLoading());
  dispatch(loadMoreStart());
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${++page}`
    })).data;
    if (list.length === 0) {
      dispatch(toggleHasMore(false));
    } else {
      const {list : oldList} = getState();
      list = [...oldList, ...list];
      dispatch(loadMoreSuccess(list, page));
    }
    dbSave({
      list,
      page,
      site
    });
    dispatch(toggleIsLoading());
  } catch (ex) {
    dispatch(loadMoreFail());
    dispatch(toggleIsLoading());
  }
}

export const refresh = (site) => async (dispatch) => {
  dispatch(toggleIsRefresh());
  dispatch(refreshStart());
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${0}`
    })).data;
    dispatch(refreshSuccess(list));
    dbSave({
      list,
      page: 0,
      site
    });
    Toast.success('已经最新！', 1);
  } catch (ex) {
    dispatch(refreshFail());
  }
  dispatch(toggleIsRefresh());
}


export const getDetail = (url) => async (dispatch) => {
  dispatch(getDetailStart());
  dispatch(toggleIsLoading());
  try {
    const __html = (await axios({
      method: 'get',
      url: `/detail?url=${url}`
    })).data;
   dispatch(getDetailSuccess(__html));
   dispatch(toggleIsLoading());
  } catch (ex) {
   dispatch(getDetailFail());
   dispatch(toggleIsLoading());    
  }
}