import * as actionTypes from './actonTypes';

const [page, list, site] = ['page', 'list', 'site'].map(key => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  } else {
    switch (key) {
      case 'list': return [];
      case 'site': return '';
      case 'page': return 0;
      default: return undefined;
    }
  }
});


export const reducer = (state = {
  meta: [],
  list,
  site,
  page,
  __html: '',
  open: false,
  isLoading: false,
  isRefresh: false,
  showLogo: !list.length,
  hasMore: true
}, action) => {
    switch (action.type) {
      case actionTypes.TOGGLEHASMORE:
        return {
          ...state,
          hasMore: action.hasMore
        }
      case actionTypes.SHOWLOGO:
        return {
          ...state,
          showLogo: action.showLogo
        }
      case actionTypes.OPENDRAWER:
      case actionTypes.TOGGLEISLOADING:
      case actionTypes.TOGGLEISREFRESH:
        const { props } = action;
        return {
          ...state,
          [props]: !state[props]
        }
      case actionTypes.CHANGEMETA_START:
      case actionTypes.GETMETA_START:
        return {
          ...state,
          [action.props]: []
        };
      case actionTypes.CHANGEMETA_SUCCESS:
        return {
          ...state,
          [action.props]: action[action.props],
          site: action.site,
          page: action.page
        };
      case actionTypes.GETMETA_SUCCESS:
        return {
          ...state,
          [action.props]: action[action.props]
        };
      case actionTypes.LOADMORE_SUCCESS:
        return {
          ...state,
          // [action.props]: [...state[action.props] , ...action[action.props]],
          [action.props]: action[action.props],
          page: action.page
        }
      case actionTypes.REFRESH_SUCCESS:
        return {
          ...state,
         [action.props]: action[action.props],
         page: 0
        }
      case actionTypes.GETDETAIL_FAIL:
      case actionTypes.GETDETAIL_START:
        return {
          ...state,
          __html: ''
        }
      case actionTypes.GETDETAIL_SUCCESS:
        return {
          ...state,
          __html: action.__html
        }
      case actionTypes.REFRESH_START:
      case actionTypes.LOADMORE_START:
      case actionTypes.REFRESH_FAIL:
      case actionTypes.LOADMORE_FAIL:
      case actionTypes.CHANGEMETA_FAIL:
      case actionTypes.GETMETA_FAIL:
      default:
        return state
    }
}
