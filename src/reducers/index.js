import { combineReducers } from 'redux';
import { yourReducer } from './yourReducer'; // Import your reducers

const rootReducer = combineReducers({
  yourReducer,
});

export default rootReducer;