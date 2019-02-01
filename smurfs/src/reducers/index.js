/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  UPDATING_SMURF,
  UPDATING_SMURF_SUCCESS,
  UPDATING_SMURF_FAILURE,
  DELETING_SMURF,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAILURE,
  UPDATE_SMURF
} from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    //============================ FETCHING SMURFS
    case FETCHING_SMURFS: 
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: '',
        fetchingSmurfs: false
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    //============================ ADDING SMURF
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: '',
        addingSmurf: false
      };
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      }
    //============================ UPDATING SMURF
    case UPDATE_SMURF: 
      return {
        ...state, 
        updatingSmurf: true
      }
    case UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf: true,
        error: ''
      };
    case UPDATING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false,
        error: ''
      }
    case UPDATING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false
      }
    //============================ DELETING SMURF
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
        error: ''
      };
    case DELETING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
        error: ''
      };
    case DELETING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false
      };
    default:
      return state;
  }
};

export default smurfReducer;