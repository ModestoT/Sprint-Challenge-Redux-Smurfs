import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATING_SMURF_SUCCESS = 'UPDATING_SMURF_SUCCESS';
export const UPDATING_SMURF_FAILURE = 'UPDATING_SMURF_FAILURE';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS';
export const DELETING_SMURF_FAILURE = 'DELETING_SMURF_FAILURE';
export const UPDATE_SMURF = 'UPDATE_SMURF';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err }))
};

export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_SMURF_FAILURE, payload: err }))
};

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: UPDATING_SMURF });
  axios 
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => dispatch({ type: UPDATING_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATING_SMURF_FAILURE, payload: err }))
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios 
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETING_SMURF_FAILURE, payload: err }))
};

export const populateForm = () => dispatch => {
  dispatch({ type: UPDATE_SMURF });
}