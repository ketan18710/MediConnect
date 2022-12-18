import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../redux/actions";
function Login(props: any) {
  const dispatch = useDispatch();
  const loginSelector = useSelector((state: any) => state.AuthReducer.login);
  useEffect(() => {
    dispatch(loginAction(1));
  }, []);

  return <div>Login</div>;
}

export default Login;
