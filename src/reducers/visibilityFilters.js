import { SET_FILTER } from '../actions/actionTypes';
import { VISIBILITY_FILTERS } from '../constants/constants';

const visibilityFilter = (state = VISIBILITY_FILTERS.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }

    default:
      return state
  }
}

export default visibilityFilter