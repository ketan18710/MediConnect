import React, { useState } from "react";
import ValidationHelpers from "../../helpers/validationHelpers";
import { EDIT_USER_PROFILE_FORM_CONSTANTS, getTodayDate } from "../../utils";
import { Button } from "./Button";
import { Input } from "./Input";

const PatientForm = (props: any) => {
  const {
    editOption,
    submitFunc,
    // editPatient,
    // setEditPatient,
    disableEmail = true,
    loading,
  } = props;
  const [editPatient, setEditPatient] = useState(false);
  const [validationObj, setValidationObj] = useState<any>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "2023-01-03",
    phone_no: "",
    email: "",
  });
  const updateForm = (key: string, val: string) => {
    setForm({
      ...form,
      [key]: val,
    });
  };
  const showSubmit = () => {
    if (editOption && !editPatient) return false;
    return true;
  };
  const submitClickFunc = (e: Event) => {
    e.preventDefault();
    const validation = ValidationHelpers.handleUserProfileValidation(form);
    setValidationObj(validation);
    if (
      validation &&
      !validation[EDIT_USER_PROFILE_FORM_CONSTANTS.FIRSTNAME] &&
      !validation[EDIT_USER_PROFILE_FORM_CONSTANTS.LASTNAME] &&
      !validation[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB] &&
      !validation[EDIT_USER_PROFILE_FORM_CONSTANTS.PHONE_NO] &&
      !validation[EDIT_USER_PROFILE_FORM_CONSTANTS.EMAIL]
    ) {
      //submit func
      submitFunc(form);
      if (editOption && editPatient) {
        setEditPatient(false);
      }
    }
  };
  const disableInputs = () => {
    if (!editOption) {
      return false;
    } else if (editOption && editPatient) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <form className="patientDetailsForm my-8 w-1/2">
      <h3 className="text-labelGrey text-2xl">Patient Details</h3>
      <div className="w-full flex items-start justify-start gap-8">
        <Input
          type="text"
          label="First Name"
          customClass="w-1/2"
          value={form.firstName}
          onChange={(e: any) => updateForm("firstName", e.target.value)}
          placeholder="First Name"
          disabled={disableInputs()}
          hasError={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.FIRSTNAME]
          }
          error={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.FIRSTNAME]
          }
        />
        <Input
          type="text"
          label="Last Name"
          customClass="w-1/2"
          value={form.lastName}
          onChange={(e: any) => updateForm("lastName", e.target.value)}
          placeholder="Last Name"
          disabled={disableInputs()}
          hasError={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.LASTNAME]
          }
          error={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.LASTNAME]
          }
        />
      </div>
      <div className="w-full flex items-start justify-start gap-8">
        <Input
          type="date"
          label="Date of Birth"
          customClass="w-1/2"
          value={form.dob}
          onChange={(e: any) => updateForm("dob", e.target.value)}
          placeholder="Date of Birth"
          max={getTodayDate()}
          disabled={disableInputs()}
          hasError={
            validationObj && validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB]
          }
          error={
            validationObj && validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB]
          }
        />
        <Input
          type="number"
          label="Phone Number"
          customClass="w-1/2"
          value={form.phone_no}
          onChange={(e: any) => updateForm("phone_no", e.target.value)}
          placeholder="Phone Number"
          disabled={disableInputs()}
          hasError={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.PHONE_NO]
          }
          error={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.PHONE_NO]
          }
        />
      </div>
      <div className="w-full flex items-start justify-start gap-8">
        <Input
          type="email"
          label="E-mail"
          customClass="w-full"
          value={form.email}
          onChange={(e: any) => updateForm("email", e.target.value)}
          placeholder="E-mail"
          disabled={disableEmail}
          hasError={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.EMAIL]
          }
          error={
            validationObj &&
            validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.EMAIL]
          }
        />
      </div>
      <div className="w-full flex items-center justify-start gap-8">
        {editOption && !editPatient && (
          <Button
            text="Edit"
            onClick={(e: Event) => {
              e.preventDefault();
              setEditPatient(!editPatient);
            }}
            fullRowWidth={true}
            customClass="w-1/2 my-4"
          />
        )}
        {showSubmit() && (
          <Button
            text="Submit"
            onClick={submitClickFunc}
            fullRowWidth={true}
            customClass="w-1/2 my-4"
            loading={loading}
          />
        )}
      </div>
    </form>
  );
};

export default PatientForm;
