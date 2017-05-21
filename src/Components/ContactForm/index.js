import React from 'react';

export const ContactForm = (props) => {

    let newPerson = {};
    return (
        <div>
            <p>New contact form</p>
            <form onSubmit={props.onAddContact}>
                <div>
                    <label>Name:
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>Surname:
                        <input type="text" name="secName" />
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input type="email" name="email" />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}