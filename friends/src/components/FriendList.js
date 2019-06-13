import React from 'react';

import Friend from './Friend';

class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
deleteItem = (e, item) => {
this.props.deleteItem(e, item);
}
    render() {
        return(
            <div className='friend-list'>
                {this.props.friends.map(friend => {
                    return (<Friend friend={friend} deleteItem={this.deleteItem} /> );               
                })}
            </div>
        ) 
    }

}

export default FriendList;