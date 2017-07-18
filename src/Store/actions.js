import * as actionTypes from './actonTypes';
import axios from 'axios';


const changeMetaStart = () => ({
  type: actionTypes.CHANGEMETA_START
});

const changeMetaSuccess = (list) => ({
  type: actionTypes.CHANGEMETA_SUCCESS,
  list,
  props: 'list'
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

const loadMoreSuccess = (page, list) => ({
  type: actionTypes.LOADMORE_SUCCESS,
  page,
  list,
  props: 'list'
});

const loadMoreFail = () => ({
  type: actionTypes.LOADMORE_FAIL
});


export const changeMeta = (site) => async (dispatch) => {
  dispatch(changeMetaStart());
  try {
    const list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${1}`
    })).data;
    dispatch(changeMetaSuccess(list, 'list', site, 1));
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
  dispatch(loadMoreStart());
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${++page}`
    })).data;
    dispatch(loadMoreSuccess(list, page));
  } catch (ex) {
    dispatch(loadMoreFail());
  }
}

export const refresh = (site) => async (dispatch) => {
  dispatch(loadMoreStart());
  try {
    let list = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${1}`
    })).data;
    dispatch(loadMoreSuccess(list));
  } catch (ex) {
    dispatch(loadMoreFail());
  }
}


export const toggleDrawer = () => (
  {
    type: actionTypes.OPENDRAWER
  }
);