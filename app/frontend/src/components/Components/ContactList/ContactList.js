import React, { Fragment, Component } from "react";
import ContactItem from "./ContactItem/ContactItem";
import './ContactList.css'
import Loader from "../Spinner/Spinner";
import Header from "../Header/header";
import { Link } from 'react-router-dom';

import { getContactList, deleteContact } from "../../Actions/ContactListActions";


import { connect } from "react-redux";


class ContactList extends React.Component {
  componentDidMount() {
    this.props.getContactList();

  }
  

  render() {


    return (
      <Fragment>
        
        <div className="container">
          <div className="">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive ">
                  <div className="table user-list ">
                    

                    <div className=' d-flex justify-content-around flex-wrap' style={{ marginTop: '2rem' }}>

                      {this.props.ContactListReducer.map((item) => {
                        return (

                          <div className=' ' key={item.id}>

                            <div className="  ">

                              <div className=' d-flex flex-column justify-content-center'>
                                < ContactItem
                                  avatar={item.avatar}
                                  name={item.name}
                                  gender={item.gender}
                                  surname={item.surname}
                                  email={item.email}
                                  role={item.role}
                                  status={item.status}

                                />

                                <div className=' d-flex justify-content-center  '>
                                  <Link to={`/delete/${item.id}`} className='small ui negative basic button' >
                                    Delete
                              </Link>




                                  < Link to={`/edit/${item.id}/`} className='small ui positive basic button'>
                                    Edit/Detail
                            </Link>





                                </div>

                              </div>
                            </div>
                          </div>

                        )
                      })
                      }



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment >
    );
  }
}
const mapStateToProps = state => ({

  ContactListReducer: Object.values(state.ContactListReducer)

})



export default connect(mapStateToProps, { getContactList, deleteContact })(ContactList);
