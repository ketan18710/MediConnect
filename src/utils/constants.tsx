export const APP_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotpassword",
  ONBOARDING: "/onboarding",
  HOME: "/",
  DASHBOARD: "/dashboard",
  PATIENTS: "/patients",
  CALENDER: "/calender",
  EDIT_PROFILE: "/edit_profile",
  ADD_NEW_PATIENT: "/add_patient",
  PATIENT_DETAILS: "/patient_details/:id",
  PATIENT_DETAILS_PREFIX: "/patient_details",
  PATIENT_DETAILS_ALIAS: (id: any) => `/patient_details/${id}`,
};
export const USER_STATE_CONSTANTS = {
  USER: "user",
  PATIENTS: "patients",
  ADDPATIENT: "addPatient",
  GETPATIENT: "getPatient",
  UPDATEPATIENT: "updatePatient",
  UPLOADDOCUMENT: "uploadDocument",
  TIMESLOTS: "timeSlots",
  PATIENTDAILYBOOKING: "patientDailyBooking",
  CREATEBOOKING: "createBooking",
  UPDATETIMESLOT: "updateTimeslot",
};
export const API_CONSTANTS = {
  init: null,
  loading: 0,
  success: 1,
  error: -1,
};

export const userRoles = {
  DOCTOR: "1",
  LAB: "2",
  PATIENT: "0",
};
export const timeSlotsStatus = {
  OPEN: 0,
  UNAVAILABLE: 2,
  BOOKED: 1,
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
export const slots = [
  {
    timeSlot: "00 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 0,
  },
  {
    timeSlot: "00 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 1,
  },
  {
    timeSlot: "01 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 2,
  },
  {
    timeSlot: "01 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 3,
  },
  {
    timeSlot: "02 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 4,
  },
  {
    timeSlot: "02 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 5,
  },
  {
    timeSlot: "03 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 6,
  },
  {
    timeSlot: "03 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 7,
  },
  {
    timeSlot: "04 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 8,
  },
  {
    timeSlot: "04 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 9,
  },
  {
    timeSlot: "05 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 10,
  },
  {
    timeSlot: "05 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 11,
  },
  {
    timeSlot: "06 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 12,
  },
  {
    timeSlot: "06 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 13,
  },
  {
    timeSlot: "07 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 14,
  },
  {
    timeSlot: "07 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 15,
  },
  {
    timeSlot: "08 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 16,
  },
  {
    timeSlot: "08 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 17,
  },
  {
    timeSlot: "09 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 18,
  },
  {
    timeSlot: "09 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 19,
  },
  {
    timeSlot: "10 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 20,
  },
  {
    timeSlot: "10 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 21,
  },
  {
    timeSlot: "11 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 22,
  },
  {
    timeSlot: "11 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 23,
  },
  {
    timeSlot: "12 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 24,
  },
  {
    timeSlot: "12 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 25,
  },
  {
    timeSlot: "13 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 26,
  },
  {
    timeSlot: "13 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 27,
  },
  {
    timeSlot: "14 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 28,
  },
  {
    timeSlot: "14 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 29,
  },
  {
    timeSlot: "15 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 30,
  },
  {
    timeSlot: "15 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 31,
  },
  {
    timeSlot: "16 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 32,
  },
  {
    timeSlot: "16 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 33,
  },
  {
    timeSlot: "17 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 34,
  },
  {
    timeSlot: "17 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 35,
  },
  {
    timeSlot: "18 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 36,
  },
  {
    timeSlot: "18 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 37,
  },
  {
    timeSlot: "19 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 38,
  },
  {
    timeSlot: "19 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 39,
  },
  {
    timeSlot: "20 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 40,
  },
  {
    timeSlot: "20 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 41,
  },
  {
    timeSlot: "21 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 42,
  },
  {
    timeSlot: "21 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 43,
  },
  {
    timeSlot: "22 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 44,
  },
  {
    timeSlot: "22 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 45,
  },
  {
    timeSlot: "23 : 00",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 46,
  },
  {
    timeSlot: "23 : 30",
    status: timeSlotsStatus.UNAVAILABLE,
    id: 47,
  },
];
