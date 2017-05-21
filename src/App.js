import React, { Component } from 'react';

import ContactList from './Components/ContactList/';
import {ContactForm} from './Components/ContactForm/';

import {CONTACTS} from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      serachprop: '',
      sortprop: ''

    }
    this.contacts = CONTACTS;
  }

  getFavContacts() {
      return this.getNotFavContacts().filter(contact => contact.fav)
    }

  getNotFavContacts() {
    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(this.state.serachprop.toLowerCase()) !== -1 || 
             contact.secName.toLowerCase().indexOf(this.state.serachprop.toLowerCase()) !== -1
    }).sort((a, b) => {
      if (this.state.sortprop === "ASC") {
          return a.name > b.name
      } else if (this.state.sortprop === "DESC") {
        return a.name < b.name
      } else {
        return a.name > b.name
      }
      });
  }

  getFilterProps = (e) => {
    e.preventDefault();
    this.setState({serachprop: e.target.value});
  }

  getSortProp(sortprop) {
    this.setState({sortprop})
  }

  onAddContact(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  
  render() {

  return (
    <div className="App">
      <div className="Filter-Wrapper">
        <form onSubmit={this.getFilterProps}>
          <input type="text" onChange={this.getFilterProps}/>
        </form>
        <br/>
        <button onClick={() => this.getSortProp("ASC")}>ASC</button>
        <button onClick={() => this.getSortProp("DESC")}>DESC</button>
      </div>
      <ContactForm onAddContact={this.onAddContact}/>
      <div className="Content-Wrapper">
        <p>All</p>
        <hr/>
        <ContactList contacts={this.getNotFavContacts()}/>
        <p>Favorites</p>
        <hr/>
        <ContactList contacts={this.getFavContacts()}/>
      </div>
    </div>
  );
}
}

export default App;
