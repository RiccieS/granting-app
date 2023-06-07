const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const specificUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPECIFIC_USER_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_SPECIFIC_USER_ERROR':
      return {
        ...state,
        userData: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default specificUserReducer;