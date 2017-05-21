import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.person = this.props.person;
    }

    render() {
        return (
        <div className={this.person.fav ? "Contact favorite" : "Contact"}>
            <p>{this.person.name} {this.person.secName}. Age: {this.person.age}</p>
            <p>Tags:</p>
            <ul className="taglist">
                {this.person.tags.map(
                    (tag, i) => {
                        return <li className="tag" key={tag}>{tag}</li>
                    }
                )}
            </ul>
        </div>
        )
    }
}

export default Contact;