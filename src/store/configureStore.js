import { applyMiddleware, createStore,compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger';
import rootReducer from '../store/reducers/rootReducer';

import firebaseConfig from '../config/fbConfig';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';



//apply middleware of logger and thunk to log the redux
//applymiddleware is enhances the store functionality so it is called the store enhancer.
//we compose different store enhancer.
//for example we compose the logger, thunk, reduxFirebase and reactReduxFirebase store enhancers 
//with composeWithDevTools or with simply compose.

export default function configureStore(preloadedState) {
  //const middlewares = [logger, thunk.withExtraArgument({getFirebase, getFirestore})]
  const middlewares = [thunk.withExtraArgument({getFirebase, getFirestore})]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers,reduxFirestore(firebaseConfig))

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}