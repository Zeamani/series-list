import { BD_LIST_SET  } from '../actionTypes';
import { BD_LIST_REMOVE  } from '../actionTypes';
import { BD_LIST_ADD  } from '../actionTypes';

function bdListSearch(state = [], action) {
    switch (action.type) {
        
        case BD_LIST_SET: {
            return [...action.value];
        }

        case BD_LIST_REMOVE: {
            return state.filter( item => action.value != item.show.id );
        }

        default: return state;
    }
}

export default bdListSearch;