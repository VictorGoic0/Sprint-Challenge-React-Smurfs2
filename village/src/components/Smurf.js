import React from 'react';
import './Smurf.css';
import { Link } from 'react-router-dom'

const Smurf = props => {
  return (
    <div className="Smurf">

      <header>
        <h2>{props.name}</h2>
        <button onClick={e => props.deleteSmurf(e, props.id)}>X</button>
      </header>

      <div className="height">
        <h3>height:</h3>
        <p>{props.height} tall</p>
      </div>

      <div className="age">
        <h3>Age:</h3>
        <p>{props.age} smurf years old</p>
      </div>

      <div className="edit">
        <Link to={{ pathname: "/edit-form", state: {
          name: props.name,
          age: props.age,
          height: props.height,
          id: props.id
        } }}>
          <button>Edit Smurf</button>
        </Link>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
