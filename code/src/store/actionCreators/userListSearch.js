import { USER_LIST_SEARCH } from '../actionTypes'

function userListSeacrh(value) {
    return {
        type: USER_LIST_SEARCH,
        value: value
    }
}

export default userListSeacrh;