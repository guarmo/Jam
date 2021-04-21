// Import types
import { GET_DATA } from "../actions/types";

// Create initial state
const initialState = {
  songs: null,
};

export default function alert(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        songs: payload,
      };
    default:
      return state;
  }
}
