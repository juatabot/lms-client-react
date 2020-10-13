import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CourseView from './courses/CourseView';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import moduleReducer from './reducers/ModuleReducer';
import courseReducer from './reducers/CourseReducer';

const rootReducer = combineReducers({
  moduleReducer: moduleReducer,
  courseReducer: courseReducer
});

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CourseView />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
