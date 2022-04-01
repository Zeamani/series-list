function mapStateToProps(component) {
    switch (component) {
        case "App": {
            return function(state) {
                return {
                    modalBDWindowState: state.modalBDWindowState,
                };
            };
        }

        case "UserCardsList": {
            return function(state) {
                return {
                    userCardsList: state.userCardsList,
                    sortedAndFilterUserCardsList: state.sortedAndFilterUserCardsList,
                    sortedAndFilterParams: state.sortedAndFilterParams
                };
            };
        }

        case "SearchUserList": {
            return function(state) {
                return {
                    searchStr: state.sortedAndFilterParams.searchStr
                }
            }
        }

        case "SearchBD": {
            return function(state) {
                return {
                    searchStr: state.sortedAndFilterBDParams.searchStr
                }
            }
        }

        case "BDWindow": {
            return function(state) {
                return {
                    searchStr: state.sortedAndFilterBDParams.searchStr,
                    bdList: state.bdSearchList
                }
            }
        }

        case "BDCardsList": {
            return function(state) {
                return {
                    bdList: state.bdSearchList,
                    userList: state.userCardsList
                }
            }
        }

        default: return undefined;
    }
}

export default mapStateToProps;