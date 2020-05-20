import axios from "axios";
import { GET_ERRORS, GET_PROJECTS} from "./type";
export const createProject = (project, history) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:9090/tdms/project", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  const response = await axios.get("http://localhost:9090/tdms/topics");
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};


