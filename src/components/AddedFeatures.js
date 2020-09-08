import React from 'react';

import AddedFeature from './AddedFeature';
import {connect} from 'react-redux';
import {toggleFeature, updateFeatures} from '../actions'

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.filter(item => item.added).map(item => (
            <AddedFeature key={item.id} feature={item} onClick={props.updateFeatures}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state){
  return {
    additionalPrice:state.additionalPrice,
    price:state.price,
    additionalFeatures:state.additionalFeatures
  }

}

export default connect(mapStateToProps, {toggleFeature, updateFeatures})(AddedFeatures);