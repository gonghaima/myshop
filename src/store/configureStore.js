// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk';

// export default function configureStore(initialState){
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk, reduxImmutableStateInvariant())
//     );
// }


import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}