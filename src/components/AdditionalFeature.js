import React from 'react';

const AdditionalFeature = props => {
  const handleClick = e => {
    e.preventDefault();
    // console.log(props.feature.id);
    props.handleAddFeature(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
