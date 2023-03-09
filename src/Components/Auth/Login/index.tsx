import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAction,
  resetLoginAction,
  setUserAction,
} from "../../../redux/actions";
import { Button, Input } from "../../Common";
import { MdLock, MdEmail } from "react-icons/md";
import {
  API_CONSTANTS,
  APP_ROUTES,
  LOGIN_FORM_CONSTANTS,
} from "../../../utils";
import ValidationHelpers from "../../../helpers/validationHelpers";
import { AuthHelpers } from "../../../helpers";
import { toast } from "react-toastify";
function Login(props: any) {
  const { history } = props;
  const dispatch: any = useDispatch();
  const loginSelector = useSelector((state: any) => state.AuthReducer.login);
  const userSelector = useSelector((state: any) => state.UserReducer.user);
  console.log(userSelector, "userSelector");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const loginFunc = async () => {
  //      const options = {
  //        method: "GET",
  //        headers: {
  //          "Content-type": "application/json; charset=UTF-8",
  //        },
  //      };
  //      const res = await request("/api/user.json", options);
  //      return res;
  //    };
  //  }
  const [validationObj, setValidationObj] = useState<any>({});
  useEffect(() => {
    // console.log(loginSelector, "loginSelector");
    if (loginSelector.status === API_CONSTANTS.success) {
      AuthHelpers.login(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY3NjY1NzYyNiwiZXhwIjoxNjc2NzQ0MDI2fQ.sfgxJfUBnIj-7jM5_z2_gmViyMufLzOfa41bqvayGls"
      );
      let arr = JSON.parse(
        localStorage.getItem("users") ||
          JSON.stringify([
            {
              id: 3,
              email: "patient@gmail.com",
              role: "patient",
              phone: 9999222214,
              createdAt: "",
              updatedAt: "",
              last_login: "",
              onboarding: true,
            },
          ])
      );
      let data = arr.find((item: any) => item.email === form.email);
      if (!data) {
        data = arr[0];
      }
      dispatch(setUserAction(data));
      dispatch(resetLoginAction());
      toast.success("Logged in successfully");
      debugger;
      if (["doctor", "lab"].includes(data.role) && !data.onboarding) {
        toast.error("Please complete onboarding");
        history.push(APP_ROUTES.ONBOARDING);
      } else {
        if (data.role === "patient") {
          history.push(APP_ROUTES.PATIENT_DETAILS_ALIAS(3));
        } else {
          history.push(APP_ROUTES.DASHBOARD);
        }
      }
    } else if (loginSelector.status === API_CONSTANTS.error) {
      toast.error("Logged in successfully");
    }
  }, [loginSelector]);
  const updateForm = (key: string, val: string) => {
    setForm({
      ...form,
      [key]: val,
    });
  };
  const handleSubmit = () => {
    const validation = ValidationHelpers.handleLoginFormValidation(form);
    setValidationObj(validation);
    if (
      validation &&
      !validation[LOGIN_FORM_CONSTANTS.EMAIL] &&
      !validation[LOGIN_FORM_CONSTANTS.PASSWORD]
    ) {
      //submit func
      dispatch(loginAction(form));
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl text-center text-primaryBlue">
        Login to MediConnect
      </h2>
      <form className="w-9/10 m-auto mt-3 mb-3">
        <Input
          Icon={MdEmail}
          iconColor={"grey"}
          type="email"
          hasError={validationObj && validationObj[LOGIN_FORM_CONSTANTS.EMAIL]}
          error={validationObj && validationObj[LOGIN_FORM_CONSTANTS.EMAIL]}
          label="Email"
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
            validationObj && validationObj[LOGIN_FORM_CONSTANTS.PASSWORD]
          }
          error={validationObj && validationObj[LOGIN_FORM_CONSTANTS.PASSWORD]}
          value={form.password}
          onChange={(e: any) => updateForm("password", e.target.value)}
          placeholder="Password"
        />
        <div className="w-full flex items-center justify-center">
          <Button
            text="Submit"
            onClick={(e: any) => {
              e.preventDefault();
              handleSubmit();
            }}
            fullRowWidth={true}
            loading={loginSelector.status === 0}
          />
        </div>
        <div className="mt-3 w-full  flex items-start justify-between">
          <h3 className="text-gray-500 w-6/12 text-base text-start">
            Don't have an account?
            <span
              onClick={() => history.push(APP_ROUTES.REGISTER)}
              className="text-highlightRed cursor-pointer"
            >
              &nbsp;Register
            </span>
          </h3>
          <h3
            onClick={() => history.push(APP_ROUTES.FORGOT_PASSWORD)}
            className="text-highlightRed  cursor-pointer w-5/12  text-base  text-end"
          >
            Forgot Password
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
