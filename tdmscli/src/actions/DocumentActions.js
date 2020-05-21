import axios from "axios";
import { GET_ERRORS, GET_DOCUMENTS} from "./type";

export const getDocuments = () => async dispatch => {
  const response = await axios.get("http://localhost:9090/api/document/topics");
  dispatch({
    type: GET_DOCUMENTS,
    payload: response.data
  });
};


