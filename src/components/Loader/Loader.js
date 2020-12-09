import React from 'react';
import { Spinner } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Loader.css';

const Loader = () => (
  <div className="Overlay">
    <div className="Spinner">
      <Spinner
        animation="grow"
        variant="primary"
        className="SpinnerStyle"
      />
    </div>
  </div>
);

export default Loader;

