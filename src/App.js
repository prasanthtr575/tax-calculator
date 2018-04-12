import React, { Component } from 'react';
import './App.css';
import allReducers from './dev/reducers/index'
import {createStore,compose} from 'redux'
import AppMain from './dev/components/AppMain'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
       const composeEnhancers =
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

        const enhancer = composeEnhancers(
         //  applyMiddleware(...middleware),
          // other store enhancers if any
        );

    const store = createStore(allReducers,enhancer)
    return (
      <Provider store={store}>
      <AppMain/>
      </Provider>
    );
  }
}

export default App;
