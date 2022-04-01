import { BD_LIST_ADD } from '../actionTypes'

function bdListAdd(value) {
    return {
        type:  BD_LIST_ADD,
        value: value
    }
}

export default bdListAdd;