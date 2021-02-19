import { v4 as uuidv4 } from "uuid";
import AddContact from '../../components/Components/AddContact/AddContact'
import { Component } from "react";
import axios from 'axios'
/*
export default class ContactListService {


  DB_URL = "http://localhost:8000/api/contacts/";
  state = {

    List: [

    ],
    currentContact: "",
    findContact: "",
  };

  async updateData() {
    const List = await fetch(this.DB_URL)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data == null) {
          return {
            List: [],
          };
        } else {
          return {
            List: data,
          };
        }
      })
      .catch((err) => console.log(err));
    return List;
  }


}
*/