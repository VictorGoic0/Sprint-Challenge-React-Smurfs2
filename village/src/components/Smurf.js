import React from 'react';
import './Smurf.css';

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
        <button>Edit Smurf</button>
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
