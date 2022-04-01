import React, {useEffect} from 'react';
import Search from './componets/Search.jsx';
import AppButton from './componets/UI/AppButton/AppButton.jsx';
import UserCardsList from './componets/UserCardsList.jsx';
import Modal from './componets/Modal';
import BDWindow from './componets/BDWindow';
import mapStateToProps from './store/mapStateToProps';
import mapDispatchToProps from './store/mapDispatchToProps';
import {connect} from 'react-redux';
import './css/App.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const SearchUserList = connect(mapStateToProps('SearchUserList'), mapDispatchToProps('SearchUserList'))(Search);

function App(props) {
  
  function switchModal() {
    props.modalToggle();
    document.body.classList.toggle('modalOpen');
  }

  return (
    <div className="App">
      {props.modalBDWindowState && 
        <Modal switchFunc={switchModal}>
          <BDWindow />
        </Modal>
      }
      <div className="container">
        <div className="App__header">
          <SearchUserList />
          <AppButton onClick={ () => switchModal() }>
            Add serial<FontAwesomeIcon className="button-icon" icon={faPlus}></FontAwesomeIcon>
          </AppButton>
        </div>
        <div className="App__body">
          <UserCardsList />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps('App'), mapDispatchToProps('App'))(App);
