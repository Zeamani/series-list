import { USER_LIST_SEARCH  } from '../actionTypes';

function sortedAndFilterParams(state = {}, action) {
    switch (action.type) {
        
        case USER_LIST_SEARCH: {
            return {...state, searchStr: action.value}
        }

        default: return state;
    }
}

export default sortedAndFilterParams;