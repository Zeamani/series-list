import {SORTER_AND_FILTER_USER_CARDS_LIST_SET} from '../actionTypes'

function sortedAndFilterUserCardsListSet(value) {
    return {
        type: SORTER_AND_FILTER_USER_CARDS_LIST_SET,
        value: value
    }
}

export default sortedAndFilterUserCardsListSet;