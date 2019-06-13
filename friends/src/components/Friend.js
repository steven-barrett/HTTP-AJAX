import React from 'react';

import './Friend.css';

class Friend extends React.Component {
    deleteItem = e => {
        e.preventDefault();
        this.props.deleteItem(e, this.props.friend);
    }   

    render() {
        return(        
        <div className='main-div'>
            <p><strong>Name: {this.props.friend.name}</strong></p>
            <p><strong>Age: {this.props.friend.age}</strong></p>
            <p><strong>Email: {this.props.friend.email}</strong></p>
            <button className='delete-button' onClick={this.deleteItem}>Delete</button>          
        </div>
    );
        }
}

export default Friend;