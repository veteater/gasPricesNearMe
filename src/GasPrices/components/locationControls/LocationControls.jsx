import React from 'react';

const LocationControls = () => {
  return (
    <article className="locationControls">
      <span>Find Near Me</span>
      <span>- or -</span>
      <span>
        <input type="text" value="zipcode" placeholder="Enter a zipcode..." readOnly />
        <span>Find</span>
      </span>
    </article>
  );
};

export default LocationControls;