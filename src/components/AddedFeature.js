import React from 'react';

const AddedFeature = props => {

  function clickIt(feature){
    props.onClick(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={clickIt}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
