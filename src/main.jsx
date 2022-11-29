import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { logger } from './middlewares'
import { compose } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'

const composeAlt = compose;

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  (esto lagea xd)|| 

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
);


const store = createStore(rootReducer,composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
)

