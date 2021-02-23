import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  const store = createStore(modules, composeWithDevTools());
  return store;
}
