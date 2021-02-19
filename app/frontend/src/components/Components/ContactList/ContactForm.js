import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  

  renderField = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        
        <input {...input} autoComplete='off' />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };
  
  onSubmit = formValues => {
    
    this.props.onSubmit(formValues);
   
    
  };

  render() {
    
   
    const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
    return (
      <div className='ui segment col-6 '>
        <form 
          
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          
          <Field name =  "name" component={this.renderField} label='Name' />
          <Field name = "surname" component={this.renderField} label='Surname' />
          <Field type="number"  min="1"  max="99" name = "avatar" component={this.renderField} label='Avatar' />
          <Field name = "gender" component={this.renderField} label='Gender' />
          <Field name = "role" component={this.renderField} label='Role' />
          <Field name = "status" component={this.renderField} label='Status' />
          <Field name = "email" component={this.renderField} label='Email' />
          
          <button className='ui primary button'>{btnText}</button>
          
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Please enter at least 1 character';
  }

  return errors;
};

export default reduxForm({
  form: 'contactForm',
  touchOnBlur: false,
  validate
})(ContactForm);