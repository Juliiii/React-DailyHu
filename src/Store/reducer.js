import * as actionTypes from './actonTypes';


export const reducer = (state = {
  meta: [],
  list: [],
  open: false,
  site: '',
  page: ''
}, action) => {
    switch (action.type) {
      case actionTypes.OPENDRAWER:
        const { open } = state;
        return {
          ...state,
          open: !open
        };
      case actionTypes.TOGGLEISLOADING:
        return {
          ...state,
          isLoading: !state.isLoading
        }
      case actionTypes.toggleIsRefresh:
        return {
          ...state,
          isRefresh: !state.isRefresh
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
