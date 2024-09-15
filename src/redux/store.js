import { createStore } from 'redux';
import contactReducer from './reducers';

const store = createStore(contactReducer);

if (process.env.NODE_ENV !== 'production') {
  window.store = store; // Expose store in dev mode
}

export default store;
