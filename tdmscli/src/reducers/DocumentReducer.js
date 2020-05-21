import { GET_DOCUMENTS, GET_DOCUMENT } from "../actions/type";
const initialState = {
  documents: [],
  document: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DOCUMENTS:
      return {
        ...state,
        documents: action.payload
      };
    case GET_DOCUMENT:
      return {
        ...state,
        document: action.payload
      };

    default:
      return state;
  }
}
