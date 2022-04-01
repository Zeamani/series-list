import { BD_LIST_REMOVE } from '../actionTypes'

function bdListRemove(value) {
    return {
        type:  BD_LIST_REMOVE,
        value: value
    }
}

export default bdListRemove;