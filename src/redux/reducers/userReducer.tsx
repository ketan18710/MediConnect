import { API_CONSTANTS, USER_STATE_CONSTANTS } from "../../utils";
import {
  ADD_PATIENT_ERROR,
  ADD_PATIENT_LOADING,
  ADD_PATIENT_RESET,
  ADD_PATIENT_SUCCESS,
  GET_PATIENTS_ERROR,
  GET_PATIENTS_LOADING,
  GET_PATIENTS_SUCCESS,
  GET_PATIENT_ERROR,
  GET_PATIENT_LOADING,
  GET_PATIENT_RESET,
  GET_PATIENT_SUCCESS,
  GET_TIMESLOTS_ERROR,
  GET_TIMESLOTS_LOADING,
  GET_TIMESLOTS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  RESET_USER_STATE,
  SET_USER,
  UPDATE_PATIENT_ERROR,
  UPDATE_PATIENT_LOADING,
  UPDATE_PATIENT_RESET,
  UPDATE_PATIENT_SUCCESS,
  UPDATE_TIMESLOT_ERROR,
  UPDATE_TIMESLOT_LOADING,
  UPDATE_TIMESLOT_SUCCESS,
  UPLOAD_DOCUMENT_ERROR,
  UPLOAD_DOCUMENT_LOADING,
  UPLOAD_DOCUMENT_RESET,
  UPLOAD_DOCUMENT_SUCCESS,
} from "../constants";
import { substate } from "./common_interface";

interface initialStateInterface {
  user: substate;
  patients: substate;
  addPatient: substate;
  getPatient: substate;
  updatePatient: substate;
  uploadDocument: substate;
  timeSlots: substate;
  patientDailyBooking: substate;
  createBooking: substate;
  updateTimeslot: substate;
}
const initState: initialStateInterface = {
  user: {
    data: null,
    status: null,
  },
  patients: {
    data: null,
    status: null,
  },
  addPatient: {
    data: null,
    status: null,
  },
  getPatient: {
    data: null,
    status: null,
  },
  updatePatient: {
    data: null,
    status: null,
  },
  uploadDocument: {
    data: null,
    status: null,
  },
  timeSlots: {
    data: null,
    status: null,
  },
  createBooking: {
    data: null,
    status: null,
  },
  patientDailyBooking: {
    data: null,
    status: null,
  },
  updateTimeslot: {
    data: null,
    status: null,
  },
};
const UserReducer = (
  inititalState = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_USER_LOADING:
      return {
        ...inititalState,
        user: {
          status: API_CONSTANTS.loading,
        },
      };

    case GET_USER_SUCCESS:
      return {
        ...inititalState,
        user: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case GET_USER_ERROR:
      return {
        ...inititalState,
        user: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case SET_USER:
      return {
        ...inititalState,
        user: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };

    case GET_PATIENTS_LOADING:
      return {
        ...inititalState,
        patients: {
          status: API_CONSTANTS.loading,
        },
      };

    case GET_PATIENTS_SUCCESS:
      return {
        ...inititalState,
        patients: {
          status: API_CONSTANTS.success,
          data: payload.data,
        },
      };
    case GET_PATIENTS_ERROR:
      return {
        ...inititalState,
        patients: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case ADD_PATIENT_LOADING:
      return {
        ...inititalState,
        addPatient: {
          status: API_CONSTANTS.loading,
        },
      };

    case ADD_PATIENT_SUCCESS:
      return {
        ...inititalState,
        addPatient: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case ADD_PATIENT_ERROR:
      return {
        ...inititalState,
        addPatient: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case ADD_PATIENT_RESET:
      return {
        ...inititalState,
        addPatient: {
          status: API_CONSTANTS.init,
          data: payload,
        },
      };

    case GET_PATIENT_LOADING:
      return {
        ...inititalState,
        getPatient: {
          status: API_CONSTANTS.loading,
        },
      };

    case GET_PATIENT_SUCCESS:
      return {
        ...inititalState,
        getPatient: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case GET_PATIENT_ERROR:
      return {
        ...inititalState,
        getPatient: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case GET_PATIENT_RESET:
      return {
        ...inititalState,
        getPatient: {
          status: API_CONSTANTS.init,
          data: payload,
        },
      };

    case UPDATE_PATIENT_LOADING:
      return {
        ...inititalState,
        updatePatient: {
          status: API_CONSTANTS.loading,
        },
      };

    case UPDATE_PATIENT_SUCCESS:
      return {
        ...inititalState,
        updatePatient: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case UPDATE_PATIENT_ERROR:
      return {
        ...inititalState,
        updatePatient: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case UPDATE_PATIENT_RESET:
      return {
        ...inititalState,
        updatePatient: {
          status: API_CONSTANTS.init,
          data: payload,
        },
      };
    case UPLOAD_DOCUMENT_LOADING:
      return {
        ...inititalState,
        uploadDocument: {
          status: API_CONSTANTS.loading,
        },
      };

    case UPLOAD_DOCUMENT_SUCCESS:
      return {
        ...inititalState,
        uploadDocument: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case UPLOAD_DOCUMENT_ERROR:
      return {
        ...inititalState,
        uploadDocument: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case UPLOAD_DOCUMENT_RESET:
      return {
        ...inititalState,
        uploadDocument: {
          status: API_CONSTANTS.init,
          data: payload,
        },
      };

    case GET_TIMESLOTS_LOADING:
      return {
        ...inititalState,
        timeSlots: {
          status: API_CONSTANTS.loading,
        },
      };

    case GET_TIMESLOTS_SUCCESS:
      return {
        ...inititalState,
        timeSlots: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case GET_TIMESLOTS_ERROR:
      return {
        ...inititalState,
        timeSlots: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };
    case UPDATE_TIMESLOT_LOADING:
      return {
        ...inititalState,
        updateTimeslot: {
          status: API_CONSTANTS.loading,
        },
      };

    case UPDATE_TIMESLOT_SUCCESS:
      return {
        ...inititalState,
        updateTimeslot: {
          status: API_CONSTANTS.success,
          data: payload,
        },
      };
    case UPDATE_TIMESLOT_ERROR:
      return {
        ...inititalState,
        updateTimeslot: {
          status: API_CONSTANTS.error,
          data: payload,
        },
      };

    case RESET_USER_STATE:
      return {
        ...inititalState,
        [payload]: {
          status: API_CONSTANTS.init,
          data: null,
        },
      };

    default:
      return inititalState;
      break;
  }
};
export default UserReducer;
