import { API_CONSTANTS } from "../../utils";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_RESET,
  LOGIN_SUCCESS,
} from "../constants";
import { substate } from "./common_interface";

interface initialStateInterface {
  login: substate;
}
const initState: initialStateInterface = {
  login: {
    data: null,
    status: null,
  },
};
const AuthReducer = (
  inititalState = initState,
  { type, payload }: { type: string; payload: substate }
) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...inititalState,
        login: {
          status: API_CONSTANTS.loading,
          data: null,
        },
      };

    case LOGIN_SUCCESS:
      return {
        ...inititalState,
        login: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...inititalState,
        login: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case LOGIN_RESET:
      return {
        ...inititalState,
        login: {
          status: API_CONSTANTS.init,
          data: null,
        },
      };

    default:
      return inititalState;
      break;
  }
};
export default AuthReducer;
