import { GET_DATA, DATA_ERROR, SET_LOADING } from "../actions/types";

// Create initial state
const initialState = {
  songs: null,
  error: null,
  loading: false,
};

export default function alert(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        songs: payload,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
