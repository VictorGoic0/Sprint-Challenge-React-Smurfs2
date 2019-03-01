import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = (event, smurf) => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="SmurfForm">
      <Navigation />
        <form onSubmit={e => this.addSmurf(e, this.state.smurf)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
