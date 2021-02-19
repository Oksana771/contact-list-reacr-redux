import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { addContact } from '../../Actions/ContactListActions';
import ContactForm from '../ContactList/ContactForm';

class ContactListCreate extends Component {
  onSubmit = formValues => {
    this.props.addContact(formValues);
    

  };

  render() {

    
    return (
      <div><h2 style={{ marginTop: '2rem'},{textAlign: 'center'} }>Add Contact</h2>
      <div style={{ marginTop: '2rem' }} className='d-flex justify-content-center'>
        <ContactForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(ContactListCreate);