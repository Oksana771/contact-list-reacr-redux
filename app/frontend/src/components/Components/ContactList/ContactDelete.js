import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal';
import history from '../../history';
import { getContact, deleteContact } from '../../Actions/ContactListActions';


class ContactDelete extends Component {
    componentDidMount() {
      this.props.getContact(this.props.match.params.id)
      
    }
 
    renderContent() {
      if (!this.props.item) {
        return 'Are you sure you want to delete this task?';
      }
      return `Are you sure you want to delete the task: ${this.props.item.name}`;
    }
  
    renderActions() {
      const { id } = this.props.match.params;
      return (
        <Fragment>
          <button
            onClick={() => this.props.deleteContact(id)}
            className='ui negative button'
          >
            Delete
          </button>
          <Link to='/' className='ui button'>
            Cancel
          </Link>
        </Fragment>
      );
    }
  
    render() {
      return (
        <Modal
          title='Delete Contact'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      );
    }
  }
  
  const mapStateToProps = (state, ownProps) => ({
    item: state.ContactListReducer[ownProps.match.params.id]
  });
  
  export default connect(
    mapStateToProps,
    { getContact, deleteContact }
  )(ContactDelete);