import React, { Fragment } from "react";
import ContactItem from "./ContactItem/ContactItem";
import './ContactList.css'

import { Link } from 'react-router-dom';
import FilterResults from 'react-filter-search';
import { getContactList, deleteContact } from "../../Actions/ContactListActions";


import { connect } from "react-redux";


class ContactSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  componentWillMount() {
    fetch('http://localhost:8000/api/contacts/')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    const { data, value } = this.state;

    return (
      <Fragment>

        <div className="container">
          <div className="">
            <div className="col-lg-12">
              <div className="main-box clearfix d-flex flex-column align-items-center" style={{ marginTop: '2rem' }}>
              <form className="form-inline my-2 my-lg-0 " >
                        <input
                          value={value} onChange={this.handleChange}
                          className="form-control mr-sm-2 "
                          type="search"
                          placeholder="Search..."
                          aria-label="Search"

                        />
                     </form>
                <div className="table-responsive ">
                  <div className="table user-list ">
                  


                    <div  style={{ marginTop: '2rem' }}>
                    
                      <FilterResults
                        value={value}
                        data={data}
                        renderResults={results => (
                          <div class=" d-flex justify-content-around flex-wrap">
                            {results.map(item => (
                              <div>
                                <div className='  ' key={item.id}>

                                  <div>

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

                                      <div className=' d-flex justify-content-center  '  >
                                        <Link to={`/delete/${item.id}`} className='small ui negative basic button'  >
                                          Delete
  </Link>




                                        < Link to={`/edit/${item.id}/`} className='small ui positive basic button'>
                                          Edit/Detail
</Link>





                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      />

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
const mapStateToProps = results => ({

  results: results.results

})



export default connect(mapStateToProps, { getContactList, deleteContact })(ContactSearch);
