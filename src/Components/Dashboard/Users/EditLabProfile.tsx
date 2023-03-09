import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ValidationHelpers from "../../../helpers/validationHelpers";
import { EDIT_LAB_PROFILE_FORM_CONSTANTS, getTodayDate } from "../../../utils";
import { Button, Input } from "../../Common";
import Chip from "../../Common/Chip";
import DoctorHistory from "../../Common/DoctorHistory";
import ScreenTitle from "../../Common/ScreenTitle";

const EditLabProfile = (props: any) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [tests, setTests] = useState<string[] | []>(["test"]);
  const [newTest, setNewTest] = useState("");
  const updateForm = (key: string, val: string) => {
    setForm({
      ...form,
      [key]: val,
    });
  };
  const [validationObj, setValidationObj] = useState<any>({});
  const submitUserProfileForm = () => {
    const validation = ValidationHelpers.handleLabProfileValidation(form);
    setValidationObj(validation);
    if (
      validation &&
      !validation[EDIT_LAB_PROFILE_FORM_CONSTANTS.NAME] &&
      !validation[EDIT_LAB_PROFILE_FORM_CONSTANTS.EMAIL]
    ) {
      //submit func
    }
  };
  const removeSpecialisations = (index: number) => {
    setTests(tests.filter((test, testIndex) => testIndex !== index));
  };
  return (
    <div className="user">
      <ScreenTitle title="Edit Lab Profile" />
      <form className="userProfileForm my-8 w-1/2">
        <div className="w-full flex items-start justify-start gap-8">
          <Input
            type="text"
            label="Lab Name"
            customClass="w-1/2"
            value={form.name}
            onChange={(e: any) => updateForm("name", e.target.value)}
            placeholder="Lab Name"
            hasError={
              validationObj &&
              validationObj[EDIT_LAB_PROFILE_FORM_CONSTANTS.NAME]
            }
            error={
              validationObj &&
              validationObj[EDIT_LAB_PROFILE_FORM_CONSTANTS.NAME]
            }
          />
          <Input
            type="email"
            label="E-mail"
            customClass="w-full"
            value={form.email}
            onChange={(e: any) => updateForm("email", e.target.value)}
            placeholder="E-mail"
            hasError={
              validationObj &&
              validationObj[EDIT_LAB_PROFILE_FORM_CONSTANTS.EMAIL]
            }
            error={
              validationObj &&
              validationObj[EDIT_LAB_PROFILE_FORM_CONSTANTS.EMAIL]
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
      </form>

      <h3 className="text-labelGrey text-2xl my-4 patientReports">
        Please enter tests perfomed by your lab :
      </h3>
      <div className="w-1/2 flex flex-col items-start justify-start gap-0">
        <Input
          type="text"
          label="Lab Name"
          customClass="w-full"
          value={newTest}
          onChange={(e: any) => setNewTest(e.target.value)}
          placeholder="Lab Name"
          hasError={
            validationObj &&
            validationObj[EDIT_LAB_PROFILE_FORM_CONSTANTS.NEW_TEST]
          }
          error={"Cannot be empty"}
        />
        <Button
          text="Add test"
          customClass="w-1/6"
          onClick={(e: Event) => {
            e.preventDefault();
            if (newTest.length <= 0) {
              validationObj[EDIT_LAB_PROFILE_FORM_CONSTANTS.NEW_TEST] = true;
              return;
            }
            setTests([...tests, newTest]);
            setNewTest("");
          }}
        />
      </div>
      <h3 className="text-labelGrey w-full text-xl my-4 patientReports">
        Test performed:
      </h3>
      <div className="w-1/2 flex items-start justify-start gap-8">
        {tests.map((test, index) => (
          <Chip
            text={test}
            Icon={FaTimes}
            iconFunc={(e: Event) => {
              e.preventDefault();
              removeSpecialisations(index);
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default EditLabProfile;
