import React, {useReducer} from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import {addFeature, removeFeature} from './actions/actions';

import reducer from './reducers/reducer';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log(props, "app.js: props");

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
  
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state, "mapStateToProps: state")
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures

  }
}
export default connect(mapStateToProps, {addFeature})(App); 
