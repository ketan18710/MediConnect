import React from "react";
import ForotPassword from "../../Components/Auth/ForgotPassword";
import Login from "../../Components/Auth/Login";
import Register from "../../Components/Auth/Register";
const AuthContainer = (props: any) => {
  const { match } = props;
  const { path } = match;
  const renderComponent = () => {
    switch (path) {
      case "/login":
        return <Login {...props} />;
      case "/register":
        return <Register {...props} />;
      case "/forgotpassword":
        return <ForotPassword {...props} />;

      default:
        break;
    }
  };
  return (
    <div className="contianer h-screen p-4 flex items-center justify-center flex-col gap-4">
      <h1 className="text-7xl text-primaryBlue">MediConnect</h1>
      <div className="border-1 shadow-outer-box-shadow w-1/3 h-fit p-6 flex items-center justify-center">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AuthContainer;
