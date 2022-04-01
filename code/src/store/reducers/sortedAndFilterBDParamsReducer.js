import { BD_SEARCH  } from '../actionTypes';

function sortedAndFilterBDParams(state = {}, action) {
    switch (action.type) {
        
        case BD_SEARCH: {
            return {...state, searchStr: action.value}
        }

        default: return state;
    }
}

export default sortedAndFilterBDParams;