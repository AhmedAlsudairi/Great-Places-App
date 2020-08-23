
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigation/PlacesNavigator';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider,useDispatch} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import reducer from './store/reducer';
import {init} from './helper/DB';



init().then(()=>{
  console.log('initialize SQLite success.');
}).catch((err)=>{
  console.log('initialize SQLite failed. '+err);
})
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
