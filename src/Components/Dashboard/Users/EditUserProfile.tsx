import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidationHelpers from "../../../helpers/validationHelpers";
import { EDIT_USER_PROFILE_FORM_CONSTANTS, getTodayDate } from "../../../utils";
import { Button, Input } from "../../Common";
import DoctorHistory from "../../Common/DoctorHistory";
import ScreenTitle from "../../Common/ScreenTitle";

const User = (props: any) => {
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
  const dispatch: any = useDispatch();
  const userSelector = useSelector((state: any) => state.UserReducer.user);

  useEffect(() => {
    const { data: user } = userSelector;
    // debugger;
    if (user) {
      setForm({
        ...form,
        firstName: user.name,
        lastName: user.name,
        email: user.email,
        phone_no: `${user.phone}`,
      });
    }
  }, [userSelector]);
  const [validationObj, setValidationObj] = useState<any>({});
  const submitUserProfileForm = () => {
    console.log(form);
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
      const users = JSON.parse(
        localStorage.getItem("users") ||
          JSON.stringify([
            {
              id: 3,
              email: "patient@gmail.com",
              role: "patient",
              name: "",
              phone: 9999222214,
              createdAt: "",
              updatedAt: "",
              last_login: "",
              onboarding: true,
            },
          ])
      );
      const ind = users?.findIndex((user: any) => user.email === form.email);
      console.log(users[ind]);
    }
  };
  return (
    <div className="user">
      <ScreenTitle title="Edit Profile" />
      <form className="userProfileForm my-8 w-1/2">
        <div className="w-full flex items-start justify-start gap-8">
          <Input
            type="text"
            label="First Name"
            customClass="w-1/2"
            value={form.firstName}
            onChange={(e: any) => updateForm("firstName", e.target.value)}
            placeholder="First Name"
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
            hasError={
              validationObj &&
              validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB]
            }
            error={
              validationObj &&
              validationObj[EDIT_USER_PROFILE_FORM_CONSTANTS.DOB]
            }
          />
          <Input
            type="number"
            label="Phone Number"
            customClass="w-1/2"
            value={form.phone_no}
            onChange={(e: any) => updateForm("phone_no", e.target.value)}
            placeholder="Phone Number"
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
          <Button
            text="Save"
            onClick={(e: Event) => {
              e.preventDefault();
              submitUserProfileForm();
            }}
          />
        </div>
        <DoctorHistory {...props} />
      </form>
    </div>
  );
};

export default User;
