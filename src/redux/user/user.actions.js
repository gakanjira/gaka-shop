import UserActionTypes from './user.types';

export const signUpStart = userData => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userData
})

export const signUpSucess = newUser => ({
  type: UserActionTypes.SIGN_UP_SUCESS,
  Payload: newUser
})

export const signFailure = errorMessage => ({
  type: UserActionTypes.SIGN_FAILURE,
  payload: errorMessage
})

export const startLoginUser = emailAndPassword => ({
  type: UserActionTypes.FETCH_USER_START,
  payload: emailAndPassword
})

export const googleLoginStart = () => ({
  type: UserActionTypes.GOOGLE_SINGIN_START
})

export const signInSucess = user => ({
  type: UserActionTypes.SINGIN_SUCESS,
  payload: user
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutSucess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCESS
})



