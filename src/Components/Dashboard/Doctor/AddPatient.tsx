import React from "react";
import PatientForm from "../../Common/PatientForm";
import ScreenTitle from "../../Common/ScreenTitle";

const AddPatient = (props: any) => {
  return (
    <div className="AddPatient">
      <ScreenTitle title="Add New Patient" />
      <PatientForm
        editOption={false}
        disableEmail={false}
        submitFunc={(form: object) => console.log(form)}
      />
    </div>
  );
};

export default AddPatient;
