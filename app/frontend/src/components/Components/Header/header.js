import React from "react";


import { Link } from "react-router-dom";
import "./header.css";


class Header extends React.Component {
 
 
  render() {
   
    return (
      <div className="container">
      <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Contact List
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-new-contact" >
                  Add contact
                </Link>
              </li>
            </ul>
          
            <form className="form-inline my-2 my-lg-0 float-right">
         
               <Link className="nav-link" to="/search" >
              <button
                 
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </div>
    );
  }
}


export default Header;

