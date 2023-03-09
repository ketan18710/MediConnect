import React, { useState } from "react";
import { userRoles } from "../../../utils";
import { Button } from "../../Common";
import DoctorHistory from "../../Common/DoctorHistory";
import ScreenTitle from "../../Common/ScreenTitle";
import EditLabProfile from "./EditLabProfile";
import User from "./EditUserProfile";

const Onboarding = (props: any) => {
  const [role, setRole] = useState("");
  const setUserRole = (e: Event, newRole: string) => {
    e.preventDefault();
    setRole(newRole);
  };

  return (
    <div className="onboarding  w-full h-full ">
      {!role && (
        <div className=" w-full h-full  flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
            <ScreenTitle title="I am a" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              onClick={(e: Event) => {
                setUserRole(e, userRoles.DOCTOR);
              }}
              text="Doctor"
            />
            <Button
              onClick={(e: Event) => {
                setUserRole(e, userRoles.LAB);
              }}
              text="Disagnostics Lab"
            />
          </div>
        </div>
      )}
      {role === userRoles.DOCTOR && <User {...props} />}
      {role === userRoles.LAB && <EditLabProfile {...props} />}
    </div>
  );
};

export default Onboarding;
