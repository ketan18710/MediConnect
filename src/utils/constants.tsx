export const APP_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotpassword",
  ONBOARDING: "/onboarding",
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

export const userRoles = {
  DOCTOR: "doctor",
  LAB: "lab",
  PATIENT: "patient",
};

export const FORM_ERROR_MESSAGES = {
  REQUIRED_MESSAGE: "Required!",
  EMPTY_MESSAGE: "Please select a value",
  INVALID_EMAIL_ADDRESS: "Please enter a valid email address",
  PASSWORD_CRITERIA: "Password should be of atleast 8 characters",
  PASSWORD_UNMATCH: "Passwords don't match",
  INVALID_NAME: "Please enter a valid full name",
  INVALID_NUMBER: "please enter valid contact number",
  INVALID_INPUT: "please enter a valid input",
  INVALID_DOMAIN: "please enter a valid domain",
};

export const AUTH_TOKEN = "authenticationToken";
