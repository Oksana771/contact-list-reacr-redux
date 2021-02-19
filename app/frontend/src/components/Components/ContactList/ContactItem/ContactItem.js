import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";

class ContactItem extends React.Component {
  state = {
    name: this.props.name,
    role: this.props.role,
    avatar: this.props.avatar,
    surname: this.props.surname,
    status: this.props.status,
    email: this.props.email,
    gender: this.props.gender,
  };
  render() {
    const { avatar, role, name, email, surname, gender } = this.state;
    const { status } = this.props;

   

    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    let statusStyle = "label label-default";

    if (status === "Active") {
      statusStyle = "label label-success";
    } else if (status === "Inctive") statusStyle = "label label-default";
    else if (status === "Banned") statusStyle = "label label-danger";
    else if (status === "Pending") statusStyle = "label label-warning";
    return (
      <div className=' ' >
        <div className=' col-12 ' >
          <div className="card ">
            <div className ="card-body" >
              <p >
                <img className="card-title" src={URL} alt="" />

                <p className="card-title">{role}</p>
              </p>
              <p>
                Name: {name}
              </p>
              <p> Surname: {surname}</p>
              <p className="">

                Status: {status}

              </p>
              <p>
                Email:
          <a href="mailto: mikki07021994@gmail.com ">  {email}</a>
              </p>
              <p>Gender: {gender}</p>
            
             
            </div>
          </div>
        </div>
        
        </div>

    );
  }
}

export default ContactItem;
