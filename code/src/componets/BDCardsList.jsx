import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import CardService from '../API/CardService.js';
import BDCard from './BDCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

function BDCardsList(props) {

    async function addCardsUser(idSerial) {
        const serialInfo = await CardService.getSerialInfo(idSerial);
        props.userListAdd(serialInfo);
        props.bdListRemove(idSerial);
        CardService.addCardToCookie(idSerial);
    }

    return (
        <TransitionGroup className="bd-window__cards-list">
            {props.listItems.map( item => {
                return (
                    <CSSTransition
                        key={item.show.id}
                        timeout={300}
                        classNames="item"
                    >
                        <BDCard serialInfo={item.show} addCard={addCardsUser.bind(undefined, item.show.id)}/>
                    </CSSTransition>
                );
            })}
        </TransitionGroup>
    );
}

export default connect(mapStateToProps('BDCardsList'), mapDispatchToProps('BDCardsList'))(BDCardsList);