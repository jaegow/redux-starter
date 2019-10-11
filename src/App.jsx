import React from 'react';
import configureStore from './store/configureStore';
import ReduxContext from './store/ReduxContext';
import UserReduxHooks from './components/User_Redux_Hooks';
import UserReduxConnect from './components/User_Redux_Connect';

const store = configureStore({});

function App() {
  return (
    <div style={{ width: 400, margin: 'auto auto' }}>
      <ReduxContext store={store}>
        <UserReduxHooks />
        <UserReduxConnect />
      </ReduxContext>
    </div>
  );
}

export default App;
