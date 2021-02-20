import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";

class ContactItem extends React.Component {
  state = {
    name: this.props.name,
    phone: this.props.phone,
    avatar: this.props.avatar,
    surname: this.props.surname,
    status: this.props.status,
    email: this.props.email,
    gender: this.props.gender,
  };
  render() {
    const { avatar, phone, name, email, surname, gender } = this.state;
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
        <div className=' col-12  ' style={{ marginBottom: '2rem', marginTop: '2rem'  }}>
          <div className="card ">
            <div className ="card-body" >
              <p >
                <img className="card-title" src={URL} alt="" />

               
              </p>
              
              <p>
                Name: {name}
              </p>
              <p> Surname: {surname}</p>
              <p>
              Phone:
              <a href="tel:+380963049630 "> {phone}</a>
              </p>
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
