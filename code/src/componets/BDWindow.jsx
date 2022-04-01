import React from 'react';
import Search from './Search.jsx';
import AppButton from './UI/AppButton/AppButton';
import BDCardsList from './BDCardsList';
import CardService from '../API/CardService';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBD = connect(mapStateToProps('SearchBD'), mapDispatchToProps('SearchBD'))(Search);

function BDWindow(props) {

    async function searchBD(searchStr) {
        const searchList = await CardService.getBDCards(searchStr);
        props.setBDList(searchList);
    } 
    
    return (
        <div className="bd-window">
            <div className="bd-window__head">
                <SearchBD />
                <AppButton
                    onClick={() => {
                        searchBD(props.searchStr);
                    }}
                >
                    Search<FontAwesomeIcon className="button-icon" icon={faSearch}></FontAwesomeIcon>
                </AppButton>
            </div>
            <div className="bd-window__body">
                <BDCardsList listItems={props.bdList} />
            </div>
        </div>
    );
}

export default connect(mapStateToProps('BDWindow'), mapDispatchToProps('BDWindow'))(BDWindow);