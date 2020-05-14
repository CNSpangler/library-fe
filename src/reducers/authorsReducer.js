import { ADD_AUTHOR } from "../actions/authorActions";

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_AUTHOR:
      return [...state, action.payload];
    default:
      return state;
  }
}