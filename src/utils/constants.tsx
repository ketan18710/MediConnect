export const APP_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotpassword",
  HOME: "/",
  DASHBOARD: "/dashboard",
  PATIENTS: "/patients",
  EDIT_PROFILE: "/edit_profile",
  ADD_NEW_PATIENT: "/add_patient",
  PATIENT_DETAILS: "/patient_details/:id",
  PATIENT_DETAILS_PREFIX: "/patient_details",
  PATIENT_DETAILS_ALIAS: (id: any) => `/patient_details/${id}`,
};
export const API_CONSTANTS = {
  init: null,
  loading: 0,
  success: 1,
  error: -1,
};
