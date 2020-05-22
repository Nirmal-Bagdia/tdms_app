import axios from "axios";
import { GET_ERRORS, GET_DOCUMENTS, GET_DOCUMENT} from "./type";

export const getDocuments = () => async dispatch => {
  const response = await axios.get("http://localhost:8081/api/document/topics");
  dispatch({
    type: GET_DOCUMENTS,
    payload: response.data
  });
};

export const getDocument = (documentId, history) => async dispatch => {
  const response = await axios.get(`http://localhost:8081/api/document/${documentId}`);
  dispatch({
    type: GET_DOCUMENT,
    payload: response.data
  });

};


