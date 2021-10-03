import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import profile from './profile';

export default combineReducers({
  profile,
  toastr,
});
