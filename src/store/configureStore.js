
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { buildLoggers } from '../utils/log';
import rootReducer from './reducers';

const { error, log } = buildLoggers('configureStore');

// todo: use a shared config with build system and project of build system
const IS_PRODUCTION = true;

const configureStore = (preloadedState) => {
  // pull in any local storage state
  let localStorageState;
  try {
    localStorageState = localStorage.getItem('@@local-redux');
    localStorageState = JSON.parse(localStorageState);
  } catch (err) {
    error('localStorage not available');
  }

  const initialState = {
    ...preloadedState,
    ...localStorageState,
  };

  let store;
  if (IS_PRODUCTION) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk),
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, createLogger()),
      ),
    );
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  store.subscribe(() => {
    // only need to save User_Redux_Hooks right now
    const state = store.getState();
    const { User } = state;
    try {
      localStorage.setItem('@@local-redux', JSON.stringify({ User }));
    } catch (err) {
      error('localStorage not available');
    }
  });


  return store;
};

export default configureStore;
