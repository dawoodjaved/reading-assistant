import authReducer from './authReducer';
import imageDataHandlingReducer from './imageDataHandlingReducer';
import ResetPasswordReducer from './ResetPasswordReducer';
import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import TempReducer from './tempReducrer';
import imageTextReducer from './imageTextReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  reset: ResetPasswordReducer,
  imageData: imageDataHandlingReducer,
  firestore:firestoreReducer,
  firebase:firebaseReducer,
  imageText:imageTextReducer,
  temp: TempReducer,
});

export default rootReducer

// the key name will be the data property on the state object