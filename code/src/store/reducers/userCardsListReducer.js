import { USER_CARDS_LIST_ADD, USER_CARDS_LIST_REMOVE } from '../actionTypes';

function userCardsList(state = [], action) {
    switch (action.type) {
        case USER_CARDS_LIST_ADD: 
            return state.concat(action.value);
            
        case USER_CARDS_LIST_REMOVE:
            return state.filter( item => item.id !== action.value); 

        default: return state;
    }
}

export default userCardsList;
