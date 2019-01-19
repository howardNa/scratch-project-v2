import React from 'react';
import { Link } from 'react-router-dom';

import GoingPerson from './GoingPerson.js'
import '../styles/Going.css';

const GoingComponent = () => {

  return (
    <div className="going-container">

        <h2 className="going-header">Going</h2>
        <GoingPerson />

    </div>
    
  )
}

export default GoingComponent;