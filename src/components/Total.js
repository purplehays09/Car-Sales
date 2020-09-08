import React from 'react';
import {connect} from 'react-redux'


const addedCost = features => {
  return features.filter(item => item.added).reduce((prev,current) => Number(prev) + Number(current.price),0)
}
const Total = props => {


  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + addedCost(props.additionalFeatures)}</h4>
    </div>
  );
};

function mapStateToProps(state){
  return{
    car: state.car,
    additionalFeatures:state.additionalFeatures
  }
}

export default connect(mapStateToProps,{}) (Total);
