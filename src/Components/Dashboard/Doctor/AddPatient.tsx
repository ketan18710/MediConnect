import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addDoctorPatientAction,
  resetAddPatientAction,
} from "../../../redux/actions";
import { API_CONSTANTS } from "../../../utils";
import PatientForm from "../../Common/PatientForm";
import ScreenTitle from "../../Common/ScreenTitle";

const AddPatient = (props: any) => {
  const dispatch: any = useDispatch();
  const userSelector = useSelector((state: any) => state.UserReducer.user);
  const addPatientSelector = useSelector(
    (state: any) => state.UserReducer.addPatient
  );
  const patientsSelector = useSelector(
    (state: any) => state.UserReducer.patients
  );
  console.log({ userSelector, addPatientSelector, patientsSelector });
  const submitFunc = (form: any) => {
    form["doctor_id"] = userSelector.id;
    dispatch(addDoctorPatientAction(form));
  };

  useEffect(() => {
    if (addPatientSelector.status === API_CONSTANTS.success) {
      toast.success("User added successfully");
      dispatch(resetAddPatientAction());
    }
  }, [addPatientSelector]);

  return (
    <div className="AddPatient">
      <ScreenTitle title="Add New Patient" />
      <PatientForm
        editOption={false}
        disableEmail={false}
        loading={addPatientSelector.status === API_CONSTANTS.loading}
        submitFunc={(form: object) => submitFunc(form)}
      />
    </div>
  );
};

export default AddPatient;
