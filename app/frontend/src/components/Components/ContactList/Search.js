import React, { Fragment, Component } from "react";
import ContactItem from "./ContactItem/ContactItem";
import './ContactList.css'
import Loader from "../Spinner/Spinner";
import Header from "../Header/header";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getContact, deleteContact, search } from "../../Actions/ContactListActions";


import { connect } from "react-redux";


class ContactSearch extends React.Component {


  render() {
    const { search, value } = this.props;

    return (
      
                    <input
                      className="form-control"
                      placeholder="Procurar Trabalho"
                      onChange={(e) => search(e.target.value)}
                      value={value} />
                   
    );
  }
}
const mapStateToProps = ({contacts}) => {

  return {value:contacts.value}

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps, { getContact, deleteContact, search })(ContactSearch);
