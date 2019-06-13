import React from 'react';

import './NewFriend.css';
class NewFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            item: {
            name: '',
            age: '',
            email: ''
        }
        }
    }
    addFriend = e => {

    }

    handleChanges = ev => {
        ev.persist();
        let value = ev.target.value;
    
        this.setState(prevState => ({
          item: {
            ...prevState.item,
            [ev.target.name]: value
          }
        }));
      };
    
      onSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
          item: {
            name: '',
            age: '',
            email: ''
          }
        });
          }
    
    render() {
        return (
            <form className='name-form' onSubmit={this.onSubmit}>
                <input className='email-input'
                    placeholder='Name'
                    value={this.state.item.name}
                    name="name"
                    onChange={this.handleChanges}
                />
                <input className='age-input'
                    placeholder='Age'
                    value={this.state.item.age}
                    name="age"
                    onChange={this.handleChanges}
                />
                <input className='email-input'
                    placeholder='Email'
                    value={this.state.item.email}
                    name="email"
                    onChange={this.handleChanges}
                />
                <button onClick={this.addFriend}>Add Friend</button>
            </form>
        )
    }
}

export default NewFriend;