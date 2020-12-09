import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'

// import { rootReducer, initialState } from './reducers/reducer';

import { addFeature, removeFeature } from './actions/index';

const App = props => {
  console.log(props);

  const handleAddFeature = featureId => {
    props.addFeature(featureId);
  }
  const handleRemoveFeature = featureId => {
    props.removeFeature(featureId);
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} handleRemoveFeature={handleRemoveFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} handleAddFeature={handleAddFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return (state)
}

export default connect(mapStateToProps, {addFeature: addFeature, removeFeature: removeFeature})(App);