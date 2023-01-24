import React, { useState } from "react";
import { getTodayDate } from "../../../utils";
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
  return (
    <div className="user">
      <ScreenTitle title="Edit Profile" />
      <form className="userProfileForm my-8 w-1/2">
        <div className="w-full flex items-center justify-start gap-8">
          <Input
            type="text"
            label="First Name"
            customClass="w-1/2"
            value={form.firstName}
            onChange={(e: any) => updateForm("firstName", e.target.value)}
            placeholder="First Name"
          />
          <Input
            type="text"
            label="Last Name"
            customClass="w-1/2"
            value={form.lastName}
            onChange={(e: any) => updateForm("lastName", e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <div className="w-full flex items-center justify-start gap-8">
          <Input
            type="date"
            label="Date of Birth"
            customClass="w-1/2"
            value={form.dob}
            onChange={(e: any) => updateForm("dob", e.target.value)}
            placeholder="Date of Birth"
            max={getTodayDate()}
          />
          <Input
            type="number"
            label="Phone Number"
            customClass="w-1/2"
            value={form.phone_no}
            onChange={(e: any) => updateForm("phone_no", e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className="w-full flex items-center justify-start gap-8">
          <Input
            type="email"
            label="E-mail"
            customClass="w-full"
            value={form.email}
            onChange={(e: any) => updateForm("email", e.target.value)}
            placeholder="E-mail"
          />
        </div>
        <div className="w-full flex items-center justify-start gap-8">
          <Button
            text="Save"
            onClick={(e: Event) => {
              e.preventDefault();
              console.log(form);
            }}
          />
        </div>
        <DoctorHistory {...props} />
      </form>
    </div>
  );
};

export default User;
