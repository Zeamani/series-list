import {USER_CARDS_LIST_REMOVE} from '../actionTypes'

function userCardsListRemove(value) {
    return {
        type: USER_CARDS_LIST_REMOVE,
        value: value
    }
}

export default userCardsListRemove;