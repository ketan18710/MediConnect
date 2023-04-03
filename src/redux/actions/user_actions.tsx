import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  ADD_PATIENT_ERROR,
  ADD_PATIENT_LOADING,
  ADD_PATIENT_RESET,
  ADD_PATIENT_SUCCESS,
  GET_PATIENTS_ERROR,
  GET_PATIENTS_LOADING,
  GET_PATIENTS_SUCCESS,
  GET_TIMESLOTS_ERROR,
  GET_TIMESLOTS_LOADING,
  GET_TIMESLOTS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  RESET_USER_STATE,
  SET_USER,
  UPDATE_TIMESLOT_ERROR,
  UPDATE_TIMESLOT_LOADING,
  UPDATE_TIMESLOT_SUCCESS,
  UPLOAD_DOCUMENT_ERROR,
  UPLOAD_DOCUMENT_LOADING,
  UPLOAD_DOCUMENT_SUCCESS,
} from "../constants";
import { Auth_Services, User_Services } from "../services";

// import auth_services from "../services/auth_services";

const defaultDispatchAction = (type: string, payload: object) => ({
  type,
  payload,
});
export const setUserAction = (data: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(SET_USER, data));
  };
};
export const getUserAction = () => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(GET_USER_LOADING, {}));
    await User_Services.getUser()
      .then((result: any) => {
        dispatch(defaultDispatchAction(GET_USER_SUCCESS, result));
      })
      .catch((error: any) => {
        dispatch(defaultDispatchAction(GET_USER_ERROR, error));
      });
  };
};
export const getDoctorPatientsAction = (data: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(GET_PATIENTS_LOADING, data));
    await User_Services.getDoctorPatients(data)
      .then((result: any) => {
        dispatch(defaultDispatchAction(GET_PATIENTS_SUCCESS, result));
      })
      .catch((error: any) => {
        dispatch(defaultDispatchAction(GET_PATIENTS_ERROR, error));
      });
  };
};
export const addDoctorPatientAction = (data: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(ADD_PATIENT_LOADING, data));
    await User_Services.addPatient(data)
      .then((result: any) => {
        dispatch(defaultDispatchAction(ADD_PATIENT_SUCCESS, result));
      })
      .catch((error: any) => {
        dispatch(defaultDispatchAction(ADD_PATIENT_ERROR, error));
      });
  };
};
export const uploadDocument = (data: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(UPLOAD_DOCUMENT_LOADING, data));
    await User_Services.uploadDocument(data)
      .then((result: any) => {
        if (result.statusCode === 200) {
          dispatch(defaultDispatchAction(UPLOAD_DOCUMENT_SUCCESS, result));
        } else {
          dispatch(defaultDispatchAction(UPLOAD_DOCUMENT_ERROR, result.error));
        }
      })
      .catch((error: any) => {
        dispatch(defaultDispatchAction(UPLOAD_DOCUMENT_ERROR, error));
      });
  };
};
export const getTimeSlots = (data: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(GET_TIMESLOTS_LOADING, data));
    await User_Services.getTimeSlots(data)
      .then((result: any) => {
        if (result.statusCode === 200) {
          dispatch(defaultDispatchAction(GET_TIMESLOTS_SUCCESS, result.data));
        } else {
          dispatch(defaultDispatchAction(GET_TIMESLOTS_ERROR, result.error));
        }
      })
      .catch((error: any) => {
        dispatch(defaultDispatchAction(GET_TIMESLOTS_ERROR, error));
      });
  };
};
export const updateTimeslot = (data: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(UPDATE_TIMESLOT_LOADING, data));
    await User_Services.updateTimeslot(data)
      .then((result: any) => {
        if (result.statusCode === 200) {
          dispatch(defaultDispatchAction(UPDATE_TIMESLOT_SUCCESS, result.data));
        } else {
          dispatch(defaultDispatchAction(UPDATE_TIMESLOT_ERROR, result.error));
        }
      })
      .catch((error: any) => {
        dispatch(defaultDispatchAction(UPDATE_TIMESLOT_ERROR, error));
      });
  };
};

export const resetAddPatientAction = () => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(ADD_PATIENT_RESET, {}));
  };
};
export const resetUserState = (state: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, any>): Promise<void> => {
    await dispatch(defaultDispatchAction(RESET_USER_STATE, state));
  };
};
