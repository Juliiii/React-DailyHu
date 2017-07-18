import * as actionTypes from './actonTypes';


export const reducer = (state = {
  meta: [],
  list: [],
  open: false
}, action) => {
    console.log(state);
    switch (action.type) {
      case actionTypes.OPENDRAWER:
        const { open } = state;
        return {
          ...state,
          open: !open
        };
      case actionTypes.CHANGEMETA_SUCCESS:
      case actionTypes.GETMETA_START:
        return {
          ...state,
          [action.props]: []
        };
      case actionTypes.CHANGEMETA_START:
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
      case actionTypes.CHANGEMETA_FAIL:
      case actionTypes.GETMETA_FAIL:
      default:
        return state
    }
}
