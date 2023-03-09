import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../redux/actions";
import { Button, Input } from "../../Common";
import { MdLock, MdEmail } from "react-icons/md";
import { APP_ROUTES, REGISTER_FORM_CONSTANTS } from "../../../utils";
import ValidationHelpers from "../../../helpers/validationHelpers";
function Register(props: any) {
  const { history } = props;
  const dispatch: any = useDispatch();
  console.log(props);
  const loginSelector = useSelector((state: any) => state.AuthReducer.login);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationObj, setValidationObj] = useState<any>({});
  useEffect(() => {
    dispatch(loginAction(1));
  }, []);
  useEffect(() => {
    console.log(loginSelector, "loginSelector");
  }, [loginSelector]);
  const updateForm = (key: string, val: string) => {
    setForm({
      ...form,
      [key]: val,
    });
  };
  const handleSubmit = () => {
    const validation = ValidationHelpers.handleRegisterFormValidation(form);
    setValidationObj(validation);
    if (
      validation &&
      !validation[REGISTER_FORM_CONSTANTS.EMAIL] &&
      !validation[REGISTER_FORM_CONSTANTS.PASSWORD] &&
      !validation[REGISTER_FORM_CONSTANTS.CONFIRM_PASSWORD]
    ) {
      //submit func
      history.push(APP_ROUTES.ONBOARDING);
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl text-center text-primaryBlue">
        Register to MediConnect
      </h2>
      <form className="w-9/10 m-auto mt-3 mb-3">
        <Input
          Icon={MdEmail}
          iconColor={"grey"}
          type="email"
          label="Email"
          hasError={
            validationObj && validationObj[REGISTER_FORM_CONSTANTS.EMAIL]
          }
          error={validationObj && validationObj[REGISTER_FORM_CONSTANTS.EMAIL]}
          value={form.email}
          onChange={(e: any) => updateForm("email", e.target.value)}
          placeholder="Email"
        />
        <Input
          Icon={MdLock}
          iconColor={"grey"}
          type="password"
          label="Password"
          hasError={
            validationObj && validationObj[REGISTER_FORM_CONSTANTS.PASSWORD]
          }
          error={
            validationObj && validationObj[REGISTER_FORM_CONSTANTS.PASSWORD]
          }
          value={form.password}
          onChange={(e: any) => updateForm("password", e.target.value)}
          placeholder="Password"
        />
        <Input
          Icon={MdLock}
          iconColor={"grey"}
          type="password"
          label="Confirm Password"
          hasError={
            validationObj &&
            validationObj[REGISTER_FORM_CONSTANTS.CONFIRM_PASSWORD]
          }
          error={
            validationObj &&
            validationObj[REGISTER_FORM_CONSTANTS.CONFIRM_PASSWORD]
          }
          value={form.confirmPassword}
          onChange={(e: any) => updateForm("confirmPassword", e.target.value)}
          placeholder="Confirm Password"
        />
        <div className="w-full flex items-center justify-center">
          <Button
            text="Submit"
            onClick={(e: any) => {
              e.preventDefault();
              handleSubmit();
            }}
            fullRowWidth={true}
          />
        </div>
        <div className="mt-3 w-full  flex items-start justify-between">
          <h3
            onClick={() => history.push(APP_ROUTES.LOGIN)}
            className="text-gray-500 w-full text-base text-center"
          >
            Already have an account,
            <span className="text-highlightRed cursor-pointer">
              &nbsp;Login
            </span>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Register;
