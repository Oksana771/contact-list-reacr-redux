import React, { Component } from 'react';

import ContactList from './ContactList'

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
       
        <ContactList />
      </div>
    );
  }
}

export default Dashboard;