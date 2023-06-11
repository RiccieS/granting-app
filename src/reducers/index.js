import { combineReducers } from 'redux';
import { yourReducer } from './yourReducer'; // Import your reducers
import specificUserReducer from './specificUserReducer';


const rootReducer = combineReducers({
  yourReducer,
  specificUser: specificUserReducer,

});

export default rootReducer;