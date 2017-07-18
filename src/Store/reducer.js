import * as actionTypes from './actonTypes';


export const reducer = (state = {
  meta: [],
  list: [],
  open: false,
  site: '',
  page: '',
  isLoading: false,
  isRefresh: false,
  hasMore: true
}, action) => {
    switch (action.type) {
      case actionTypes.TOGGLEHASMORE:
        return {
          ...state,
          hasMore: action.hasMore
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
          [action.props]: [...state[action.props] , ...action[action.props]],
          page: action.page
        }
      case actionTypes.REFRESH_SUCCESS:
        return {
          ...state,
         [action.props]: action[action.props],
         page: 1
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
