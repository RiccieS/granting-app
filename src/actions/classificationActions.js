import { ClassificationByUserQuery } from '../queries/UserClassificationQuery';
import{UserClassificationMutationQuery}from'../queries/UserClassificationMutationQuery';
import{SpecificUserQuery}from'../queries/SpecificUserQuery';

// Action Types
const FETCH_CLASSIFICATIONS_REQUEST = 'FETCH_CLASSIFICATIONS_REQUEST';
const FETCH_CLASSIFICATIONS_SUCCESS = 'FETCH_CLASSIFICATIONS_SUCCESS';
const FETCH_CLASSIFICATIONS_FAILURE = 'FETCH_CLASSIFICATIONS_FAILURE';

// Action Creators
const fetchClassificationsRequest = () => ({
  type: FETCH_CLASSIFICATIONS_REQUEST,
});

const fetchClassificationsSuccess = (classifications) => ({
  type: FETCH_CLASSIFICATIONS_SUCCESS,
  payload: classifications,
});

const fetchClassificationsFailure = (error) => ({
  type: FETCH_CLASSIFICATIONS_FAILURE,
  payload: error,
});

export const fetchClassifications = (selectedStudent) => async (dispatch) => {
  dispatch(fetchClassificationsRequest());

  try {
    console.log(selectedStudent);
    const response = await ClassificationByUserQuery(selectedStudent);
    console.log("response: "+response);
    const data = await response.json();
    console.log("data z query: "+ data.data);
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const userClassifications = data.data.acclassificationPageByUser;
    console.log("user classific in actions: " + userClassifications);
    dispatch(fetchClassificationsSuccess(userClassifications));
  } catch (error) {
    dispatch(fetchClassificationsFailure(error.message));
  }
};

// Reducer
const initialState = {
  classifications: [],
  loading: false,
  error: null,
};

const classificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSIFICATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CLASSIFICATIONS_SUCCESS:
      return {
        ...state,
        classifications: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CLASSIFICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default classificationReducer;

const All = {
  ItemSliceActions: {
    item_update: (result) => {
      // Implementation details
    },
  },
};
export const UserClassificationFetchAsyncAction = (id) => (dispatch, getState) => {
    ClassificationByUserQuery(id)
  .then(response => response.json())
  .then(json => {
      const result = json?.data?.result
      if (result) {
          const action = All.ItemSliceActions.item_update(result)
          dispatch(action)
      }
  })

}
export const UserClassificationUpdateAsyncAction = ({id, lastchange, level_id}) => (dispatch, getState) => {
  UserClassificationMutationQuery({id, lastchange, level_id})
  .then(response => response.json())
  .then(json => {
      const result = json?.data?.result
      if (result) {
          const user = result.classification.user
          const action = All.ItemSliceActions.item_update(user)
          dispatch(action)
      }
  })

}

export const fetchSpecificUserSuccess = (userData) => ({
  type: 'FETCH_SPECIFIC_USER_SUCCESS',
  payload: userData,
});

export const fetchSpecificUserError = (error) => ({
  type: 'FETCH_SPECIFIC_USER_ERROR',
  payload: error,
});

export const fetchSpecificUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await SpecificUserQuery(id);
      const data = await response.json();
      const userData = data.result;
      dispatch(fetchSpecificUserSuccess(userData));
    } catch (error) {
      dispatch(fetchSpecificUserError(error));
    }
  };
};