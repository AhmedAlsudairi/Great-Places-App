
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/PlacesNavigator';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import reducer from './store/reducer';

const rootReducer = combineReducers({
  places: reducer 
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return <Provider store={store} ><Navigator/></Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
