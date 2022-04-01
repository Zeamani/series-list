import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function BDCard(props) {
    return (
        <div className="bd-window__card">
            <div>
                <a href={props.serialInfo.url} target="_blank">{props.serialInfo.name}</a>
                <span
                    onClick={ () => { props.addCard()} } 
                >
                    <FontAwesomeIcon className="button-icon" icon={faPlus}></FontAwesomeIcon>
                </span>
            </div>
        </div>
    );
}

export default BDCard;