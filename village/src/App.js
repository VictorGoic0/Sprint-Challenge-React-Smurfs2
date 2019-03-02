import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import EditForm from './components/EditForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err))
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
      this.setState({ smurfs: res.data })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      this.setState({ smurfs: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  editFriend = (e, smurf) => {
    e.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log(res);
      this.setState({ smurfs: res.data })
    })
    .catch(err => {
      console.log(err);
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={ownProps => <Smurfs {...ownProps} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} />
        <Route path="/smurf-form" render={ownProps => <SmurfForm {...ownProps} addSmurf={this.addSmurf} />} />
        <Route path="/edit-form" render={ownProps => <EditForm {...ownProps} editFriend={this.editFriend} />} />
      </div>
    );
  }
}

export default App;
