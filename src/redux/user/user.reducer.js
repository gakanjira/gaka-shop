import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  userData: null,
  newUserData: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        newUserData: action.payload
      }
    case UserActionTypes.FETCH_USER_START:
      return {
        ...state,
        userData: action.payload
      };
    case UserActionTypes.GOOGLE_SINGIN_START:
      return {
        ...state
      };
    case UserActionTypes.SIGN_UP_SUCESS:
      return {
        ...state,
        newUserData: action.payload,
        errorMessage: null
      }
    case UserActionTypes.SINGIN_SUCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      };
    case UserActionTypes.SIGN_OUT_SUCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      }
    case UserActionTypes.SIGN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
