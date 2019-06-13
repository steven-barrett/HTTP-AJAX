import React from 'react';

import axios from 'axios';
import FriendList from './components/FriendList';
import NewFriend from './components/NewFriend';

// import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeItem: null
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(error => console.log(error));
  }

  addItem = item => {
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({ friends: res.data });
        // this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  };

  deleteItem = (e, item) => {
    e.preventDefault();
    console.log(item);
    axios
      .delete(`http://localhost:5000/friends/${item.id}`)
      .then(res => {
        this.setState({ items: res.data });
        // this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  };

  render() {

    return (
    <div className="App">
      <h1 className="App-header" align="center">
        Friends
      </h1>      
      <FriendList friends={this.state.friends} deleteItem={this.deleteItem} />
      <div className='newFriend-form'>
        <NewFriend addItem={this.addItem} />
      </div>
    </div>
  );
  }
}

export default App;
