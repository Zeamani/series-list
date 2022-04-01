import React from 'react';
import AppInput from './UI/AppInput/AppInput';

function Search(props) {
    return (
        <div className="search">
            <AppInput
                value={props.searchStr}
                onChange={ e => props.setSearchStr(e.target.value)}
                placeholder='Serial Name'
                isDelFunc={true}
                delFunc={props.setSearchStr.bind(undefined, "")}
                />
        </div>
    );
}

export default Search;