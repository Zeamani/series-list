import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AppInput({isDelFunc, delFunc, ...props}) {
    return (
        <div className="AppInput">
            <input type="text" {...props}/>
            {isDelFunc && <div 
                            onClick={() => delFunc()} 
                            className="input-icon">
                                <FontAwesomeIcon  icon={faTimes}></FontAwesomeIcon>
                          </div>}
        </div>
    );
}

export default AppInput;