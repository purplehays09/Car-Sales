import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import {toggleFeature, updateFeatures} from '../actions'


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} onClick={props.updateFeatures}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
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

export default connect(mapStateToProps, {toggleFeature, updateFeatures})(AdditionalFeatures);


