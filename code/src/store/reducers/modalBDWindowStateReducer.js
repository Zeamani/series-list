import { MODAL_BD_WINDOW_TOGGLE  } from '../actionTypes';

function modalBDWindowState(state = false, action) {
    switch (action.type) {
        
        case MODAL_BD_WINDOW_TOGGLE: {
            return !state;
        }

        default: return state;
    }
}

export default modalBDWindowState;