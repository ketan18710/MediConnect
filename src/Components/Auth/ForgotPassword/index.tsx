import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../redux/actions";
import { Button, Input } from "../../Common";
import { MdLock, MdEmail } from "react-icons/md";
import { APP_ROUTES, FORGOT_PASSWORD_FORM_CONSTANTS } from "../../../utils";
import ValidationHelpers from "../../../helpers/validationHelpers";
function ForotPassword(props: any) {
  const { history } = props;
  const dispatch: any = useDispatch();
  console.log(props, "props");
  console.log(history, "history");
  const loginSelector = useSelector((state: any) => state.AuthReducer.login);
  const [form, setForm] = useState({
    email: "",
    otp: "",
  });
  const [validationObj, setValidationObj] = useState<any>({});
  const [screen, setScreen] = useState(1);
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
  const handleSubmitEmail = () => {
    const validation = ValidationHelpers.handleForgotPasswordValidation(form);
    setValidationObj(validation);
    if (validation && !validation[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL]) {
      //submit func

      setScreen(2);
    }
  };
  const handleSubmitOtp = () => {
    // const validation = ValidationHelpers.handleLoginFormValidation(form);
    // setValidationObj(validation);
    // if (validation && !validation[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL]) {
    //   //submit func
    // }
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl text-center text-primaryBlue">Forgot Password</h2>
      <form className="w-9/10 m-auto mt-3 mb-3">
        {screen === 1 && (
          <Input
            Icon={MdEmail}
            iconColor={"grey"}
            type="email"
            label="Enter e-mail to send verification code"
            hasError={
              validationObj &&
              validationObj[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL]
            }
            error={
              validationObj &&
              validationObj[FORGOT_PASSWORD_FORM_CONSTANTS.EMAIL]
            }
            value={form.email}
            onChange={(e: any) => updateForm("email", e.target.value)}
            placeholder="Email"
          />
        )}
        {screen === 2 && (
          <Input
            Icon={MdLock}
            iconColor={"grey"}
            type="password"
            label="Enter verification code send e-mail to"
            value={form.otp}
            onChange={(e: any) => updateForm("otp", e.target.value)}
            placeholder="OTP"
          />
        )}
        <div className="w-full flex items-center justify-center">
          {screen === 1 && (
            <Button
              text="Send OTP"
              onClick={(e: any) => {
                e.preventDefault();
                handleSubmitEmail();
              }}
              fullRowWidth={true}
            />
          )}
          {screen === 2 && (
            <Button
              text="Submit"
              onClick={(e: any) => {
                e.preventDefault();
                setScreen(2);
              }}
              fullRowWidth={true}
            />
          )}
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

export default ForotPassword;
