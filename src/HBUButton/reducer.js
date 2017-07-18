import * as actionTypes from './actionsTypes';


export const buttonReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.toggleDrawer:
        const { open } = state;
        return {
          ...state,
          open: !open
        };
      default:
        return state;
    }
}