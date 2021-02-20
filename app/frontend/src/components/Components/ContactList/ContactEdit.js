import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact, editContact } from '../../Actions/ContactListActions';
import ContactForm from '../ContactList/ContactForm'

class ContactEdit extends Component {
  
    componentDidMount() {
      this.props.getContact(this.props.match.params.id);
    }
  
    onSubmit = formValues => {
     this.props.editContact(this.props.match.params.id, formValues);
    };
  
    render() {
      return (
        
        <div><h2 style={{ marginBottom: '2rem'},{textAlign: 'center'} }>Edit Contact</h2>
        <div className='ui container  d-flex justify-content-center'>
          
          <ContactForm
          
            initialValues={_.pick(this.props.item, 'name', 'surname', 'email', 'gender', 'phone', 'status', 'avatar' )}
            enableReinitialize={true}
            onSubmit={this.onSubmit}
          />
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state, ownProps) => ({
    item: state.ContactListReducer[ownProps.match.params.id]
    
  });
  
  export default connect(
    mapStateToProps,
    { getContact, editContact }
  )(ContactEdit);