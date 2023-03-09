/**
 * @description Validation helpers deals with all types of in app validation
 */

// import {
// //   LOGIN_FORM_CONSTANTS,
// //   FORM_ERROR_MESSAGES,
// } from "utils/constants";
import {
  EDIT_LAB_PROFILE_FORM_CONSTANTS,
  EDIT_USER_PROFILE_FORM_CONSTANTS,
  FORGOT_PASSWORD_FORM_CONSTANTS,
  FORM_ERROR_MESSAGES,
  LOGIN_FORM_CONSTANTS,
  REGISTER_FORM_CONSTANTS,
} from "../utils";

const errorValidation = {};

const ValidationHelpers = {
  isRequired: (value: any) => {
    if (value === null) return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (value === "null") return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (value === undefined) return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (typeof value === "number" || typeof value === "boolean") {
      return value ? null : FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    }
    return value.trim().length > 0
      ? null
      : FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  isEmpty: (value: string) => {
    if (value && value.length > 0) {
      return null;
    }
    return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  checkEmail: (value: string) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_EMAIL_ADDRESS;
    }
    return null;
  },
  checkFullName: (value: string) => {
    const regex = /[a-zA-Z0-9'-]\s{0,}/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkFirstName: (value: string) => {
    const regex = /^[a-zA-Z\s]{0,30}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkPhoneNumber: (value: string) => {
    const regex = /^[0-9]{10}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NUMBER;
    }
    return null;
  },
  checkNumber: (value: number) => {
    const regex = /^[0-9]{10}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NUMBER;
    }
    return null;
  },
  checkImageFile: (value: any) => {
    const regex = /.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkPassword: (value: string) => {
    if (value && value.length < 8) {
      return FORM_ERROR_MESSAGES.PASSWORD_CRITERIA;
    }
    return null;
  },
  confirmPassword: (pass: string, confirm: string) => {
    if (pass !== confirm) {
      return FORM_ERROR_MESSAGES.PASSWORD_UNMATCH;
    }
    return null;
  },
  checkDomain: (value: string) => {
    const regex =
      /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_DOMAIN;
    }
  },
  handleLoginFormValidation(values: any) {
    const errors: any = {};
    errors[LOGIN_FORM_CONSTANTS.EMAIL] =
      this.isEmpty(values[LOGIN_FORM_CONSTANTS.EMAIL]) ||
      this.checkEmail(values[LOGIN_FORM_CONSTANTS.EMAIL]);
    errors[LOGIN_FORM_CONSTANTS.PASSWORD] =
      this.isEmpty(values[LOGIN_FORM_CONSTANTS.PASSWORD]) ||
      this.checkPassword(values[LOGIN_FORM_CONSTANTS.PASSWORD]);
    return errors;
  },
  handleRegisterFormValidation(values: any) {
    const errors: any = {};
    errors[REGISTER_FORM_CONSTANTS.EMAIL] =
      this.isEmpty(values[REGISTER_FORM_CONSTANTS.EMAIL]) ||
      this.checkEmail(values[REGISTER_FORM_CONSTANTS.EMAIL]);
    errors[REGISTER_FORM_CONSTANTS.PASSWORD] =
      this.isEmpty(values[REGISTER_FORM_CONSTANTS.PASSWORD]) ||
      this.checkPassword(values[REGISTER_FORM_CONSTANTS.PASSWORD]);
    errors[REGISTER_FORM_CONSTANTS.CONFIRM_PASSWORD] =
      this.isEmpty(values[REGISTER_FORM_CONSTANTS.CONFIRM_PASSWORD]) ||
      this.confirmPassword(
        values[REGISTER_FORM_CONSTANTS.PASSWORD],
        values[REGISTER_FORM_CONSTANTS.CONFIRM_PASSWORD]
      );
    return errors;
  },
  handleForgotPasswordValidation(values: any) {
    const errors: any = {};
    errors[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL] =
      this.isEmpty(values[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL]) ||
      this.checkEmail(values[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL]);
    return errors;
  },
  handleUserProfileValidation(values: any) {
    const errors: any = {};
    errors[EDIT_USER_PROFILE_FORM_CONSTANTS.FIRSTNAME] = this.isEmpty(
      values[EDIT_USER_PROFILE_FORM_CONSTANTS.FIRSTNAME]
    );
    errors[EDIT_USER_PROFILE_FORM_CONSTANTS.LASTNAME] = this.isEmpty(
      values[EDIT_USER_PROFILE_FORM_CONSTANTS.LASTNAME]
    );
    errors[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB] = this.isEmpty(
      values[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB]
    );
    errors[EDIT_USER_PROFILE_FORM_CONSTANTS.PHONE_NO] =
      this.isEmpty(values[EDIT_USER_PROFILE_FORM_CONSTANTS.PHONE_NO]) ||
      this.checkNumber(values[EDIT_USER_PROFILE_FORM_CONSTANTS.PHONE_NO]);
    errors[EDIT_USER_PROFILE_FORM_CONSTANTS.EMAIL] =
      this.isEmpty(values[EDIT_USER_PROFILE_FORM_CONSTANTS.EMAIL]) ||
      this.checkEmail(values[EDIT_USER_PROFILE_FORM_CONSTANTS.EMAIL]);
    return errors;
  },
  handleLabProfileValidation(values: any) {
    const errors: any = {};
    errors[EDIT_LAB_PROFILE_FORM_CONSTANTS.NAME] = this.isEmpty(
      values[EDIT_LAB_PROFILE_FORM_CONSTANTS.NAME]
    );
    errors[EDIT_LAB_PROFILE_FORM_CONSTANTS.EMAIL] =
      this.isEmpty(values[EDIT_LAB_PROFILE_FORM_CONSTANTS.EMAIL]) ||
      this.checkEmail(values[EDIT_LAB_PROFILE_FORM_CONSTANTS.EMAIL]);
    return errors;
  },
};

export default ValidationHelpers;
