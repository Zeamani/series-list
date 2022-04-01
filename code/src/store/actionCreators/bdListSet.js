import { BD_LIST_SET } from '../actionTypes'

function bdListSet(value) {
    return {
        type:  BD_LIST_SET,
        value: value
    }
}

export default bdListSet;