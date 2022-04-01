import { combineReducers } from 'redux';
import userCardsList from './userCardsListReducer'
import sortedAndFilterUserCardsList from './sortedAndFilterUserCardsListReducer';
import sortedAndFilterParams from './sortedAndFilterParamsReducer';
import sortedAndFilterBDParams from './sortedAndFilterBDParamsReducer';
import bdSearchList from './bdSearchListReducer';
import modalBDWindowState from './modalBDWindowStateReducer';

export default combineReducers({
    userCardsList,
    sortedAndFilterUserCardsList,
    sortedAndFilterParams,
    sortedAndFilterBDParams,
    modalBDWindowState,
    bdSearchList
});