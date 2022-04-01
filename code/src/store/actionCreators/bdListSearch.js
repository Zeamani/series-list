import { BD_SEARCH } from '../actionTypes'

function bdListSeacrh(value) {
    return {
        type: BD_SEARCH,
        value: value
    }
}

export default bdListSeacrh;