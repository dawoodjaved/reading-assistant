import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
// import createReduxStore from './store/createReduxStore';
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const rrfConfig = { 
  userProfile: 'users' ,
  useFirestoreForProfile: true,
  attachAuthIsReady: true  
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return null;
  return children
}

const store = configureStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
<Provider store={store}>
<ReactReduxFirebaseProvider {...rrfProps}>
<AuthIsLoaded>
    <App />
    </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));
