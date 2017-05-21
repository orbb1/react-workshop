import React, {Component} from 'react';
import Contact from '../Contact/';

class ContactList extends Component {

    render() {
        return (
            <div className="ContactList-Wrapper">
                {this.props.contacts.map(contact => <Contact key={contact.age} person={contact}/>)}
            </div>
        )
    }
}

export default ContactList;