import React from 'react';
import LocationControls from '../locationControls/LocationControls';

const Header = () => {
  return (
    <header>
      <h1>Gas Prices Near Me</h1>
      <LocationControls />
    </header>
  );
};

export default Header;