import { createStore } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';
import reducer from './reducers';

const store = createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())

export default store;