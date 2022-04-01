import { bindActionCreators } from 'redux';
import userCardsListAdd from './actionCreators/userCardsListAdd';
import sortedAndFilterUserCardListSet from './actionCreators/sortedAndFilterUserCardListSet';
import userCardsListRemove from './actionCreators/userCardsListRemove';
import userListSearch from './actionCreators/userListSearch';
import bdListSearch from './actionCreators/bdListSearch';
import bdListAdd from './actionCreators/bdListAdd';
import bdListRemove from './actionCreators/bdListRemove';
import bdListSet from './actionCreators/bdListSet';
import modalBDWindowToggle from './actionCreators/modalBDWindowToggle';

function mapDispatchToProps(component) {
    switch (component) {
        case "App": {
            return function (dispatch) {
                return {
                    modalToggle: bindActionCreators(modalBDWindowToggle, dispatch)
                }
            }
        }

        case "UserCardsList": {
            return function (dispatch) {
                return {
                    setList: bindActionCreators(userCardsListAdd, dispatch),
                    setSortedAndFilterList: bindActionCreators(sortedAndFilterUserCardListSet, dispatch),
                    removeCard:  bindActionCreators(userCardsListRemove, dispatch)
                }
            }
        }

        case "SearchUserList": {
            return function (dispatch) {
                return {
                    setSearchStr: bindActionCreators(userListSearch, dispatch),
                }
            }
        }

        case "SearchBD": {
            return function (dispatch) {
                return {
                    setSearchStr: bindActionCreators(bdListSearch, dispatch),
                }
            }
        }

        case "BDWindow": {
            return function(dispatch) {
                return {
                    setBDList: bindActionCreators(bdListSet, dispatch)
                }
            }
        }

        case "BDCardsList": {
            return function (dispatch) {
                return {
                    bdListRemove: bindActionCreators(bdListRemove, dispatch),
                    userListAdd: bindActionCreators(userCardsListAdd, dispatch)
                }
            }
        }
    
        default: return undefined;
    }
}

export default mapDispatchToProps;