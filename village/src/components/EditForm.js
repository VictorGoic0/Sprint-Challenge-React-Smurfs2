import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import './SmurfForm.css';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: props.location.state.name,
        age: props.location.state.age,
        height: props.location.state.height,
        id: props.location.state.id
      }
    }
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

  editFriend = smurf => {
    console.log(this.state);
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    })
  }

  render() {
    return (
      <div className="EditForm">
        <Navigation />
        <form onSubmit={() => this.editFriend(this.state.smurf)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <button type="submit">Submit Edit</button>
        </form>
      </div>
    )
  }
}

export default EditForm;
