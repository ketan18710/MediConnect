import React, { useState } from "react";
import { FaReact, FaHome, FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import "./style.scss";
import { APP_ROUTES } from "../../utils";
const Sidebar = (props: any) => {
  console.log(props, "sidebar");
  const { history } = props;
  const [showUserTooltip, setShowUserTooltip] = useState(false);
  const resetTooltip = () => {
    setTimeout(() => {
      setShowUserTooltip(!showUserTooltip);
    }, 300);
  };
  const redirectToUrl = (route: string) => {
    history.push(route);
  };
  return (
    <div className="sidebar w-[4%] h-full bg-primaryBlue flex items-center justify-between flex-col py-6 gap-8">
      <FaReact className="" size="2em" color="white" />
      <div className="navItems">
        <FaHome
          onClick={() => redirectToUrl(APP_ROUTES.DASHBOARD)}
          className="my-3 cursor-pointer sidebarLink"
          size="1.5em"
          title="Home"
        />
        <FaUser
          onClick={() => redirectToUrl(APP_ROUTES.PATIENTS)}
          className="my-10 cursor-pointer sidebarLink"
          title="Patients"
          size="1.5em"
        />
      </div>
      <div
        onMouseEnter={() => resetTooltip()}
        onMouseLeave={() => resetTooltip()}
        className="mt-auto mb-8 relative"
      >
        <AiFillSetting className="cursor-pointer sidebarLink" size="1.5em" />
        {showUserTooltip && (
          <div
            // onMouseEnter={() => setShowUserTooltip(true)}
            className="showUserTooltip w-fit min-h-max min-w-max shadow-outer-box-shadow py-5 px-4 rounded-md box-content bg-white absolute -top-8 left-6"
          >
            <p
              onClick={() => redirectToUrl(APP_ROUTES.EDIT_PROFILE)}
              className="text-labelGrey  cursor-pointer  hover:text-primaryBlue "
            >
              Edit Profile
            </p>
            <p className="text-labelGrey  cursor-pointer  hover:text-primaryBlue ">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
