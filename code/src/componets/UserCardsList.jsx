import React, {useEffect}  from 'react';
import Card from './Card.jsx'
import {connect} from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import CardService from '../API/CardService.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

function UserCardsList(props) {
    
    function removeItem(idCard) {
        props.removeCard(idCard);
        CardService.removeCardFromCookie(idCard);
    }

    useEffect( async () => {
        const userCardsInfo = await CardService.getUserCards();
        props.setList(userCardsInfo);
        
    }, []);

    useEffect( () => {
        const sortedAndFilterList = props.userCardsList.filter( item => {
            return item.name.toLowerCase().includes(props.sortedAndFilterParams.searchStr.toLowerCase());
        });
        props.setSortedAndFilterList(sortedAndFilterList);
    }, [props.userCardsList, props.sortedAndFilterParams]);

    return (
        <TransitionGroup className="cards-list">
            {props.sortedAndFilterUserCardsList.map( item => {
                return (
                    <CSSTransition
                        key={item.id}
                        timeout={300}
                        classNames="item"
                    >
                        <Card cardInfo={item} removeFunc={removeItem.bind(undefined, item.id)}/>
                    </CSSTransition>
                ); 
            })}
        </TransitionGroup>
    )
}

export default connect(mapStateToProps('UserCardsList'), mapDispatchToProps('UserCardsList'))(UserCardsList);