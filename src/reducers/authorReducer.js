import * as types from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function actionReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
