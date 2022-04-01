import { SORTER_AND_FILTER_USER_CARDS_LIST_SET } from '../actionTypes';

function sortedAndFilterUserCardsList(state = [], action) {
    switch (action.type) {
        case SORTER_AND_FILTER_USER_CARDS_LIST_SET: 
            return action.value;

        default: return state;
    }
}

export default sortedAndFilterUserCardsList;