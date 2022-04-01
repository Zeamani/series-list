import { MODAL_BD_WINDOW_TOGGLE } from '../actionTypes'

function modalBDWindowToggle(value) {
    return {
        type:  MODAL_BD_WINDOW_TOGGLE,
        value: value
    }
}

export default modalBDWindowToggle;