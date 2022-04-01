import {USER_CARDS_LIST_ADD} from '../actionTypes'

function userCardsListAdd(value) {
    return {
        type: USER_CARDS_LIST_ADD,
        value: value
    }
}

export default userCardsListAdd;