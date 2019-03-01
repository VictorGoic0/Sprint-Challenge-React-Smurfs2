import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav className="navigation">
      <Link to="/smurf-form">
      <button>Add New Smurf</button>
      </Link>
    </nav>
  )
}

export default Navigation;
