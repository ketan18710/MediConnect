import React, { useEffect, useState } from "react";
import { Button } from "../../Common";
import { FaPlus, FaEye } from "react-icons/fa";
import ScreenTitle from "../../Common/ScreenTitle";
import { API_CONSTANTS, APP_ROUTES, getAgeInYears } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorPatientsAction } from "../../../redux/actions";
import Loader from "../../Common/Loader";
import { toast } from "react-toastify";
const ViewPatients = (props: any) => {
  const { history } = props;
  const dispatch: any = useDispatch();
  const patientsSelector = useSelector(
    (state: any) => state.UserReducer.patients
  );
  const userSelector = useSelector((state: any) => state.UserReducer.user);
  const [patients, setPatients] = useState([]);
  const [loader, setLoader] = useState(false);
  console.log(patients);
  useEffect(() => {
    if (userSelector.data) {
      dispatch(getDoctorPatientsAction(userSelector.data.id));
      setLoader(true);
    }
  }, [userSelector]);
  useEffect(() => {
    if (patientsSelector.status === API_CONSTANTS.loading) {
      setLoader(true);
    } else if (patientsSelector.status === API_CONSTANTS.success) {
      setPatients(patientsSelector.data);
      setLoader(false);
    }
  }, [patientsSelector]);

  return (
    <div className="ViewPatients">
      <ScreenTitle title="View Patients" />
      <div className="w-full flex items-center justify-end">
        <Button
          text="Add Patient"
          Icon={FaPlus}
          onClick={(e: any) => {
            e.preventDefault();
            history.push(APP_ROUTES.ADD_NEW_PATIENT);
          }}
        />
      </div>
      <div className="w-full h-full my-8 patientsTable">
        {loader ? (
          <Loader />
        ) : (
          <table className="min-w-full shadow-outer-box-shadow ">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-md font-medium text-labelGrey font-medium px-6 py-4 text-left"
                >
                  Patient Id
                </th>
                <th
                  scope="col"
                  className="text-md font-medium text-labelGrey font-medium px-6 py-4 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="text-md font-medium text-labelGrey font-medium px-6 py-4 text-left"
                >
                  Contact Number
                </th>
                <th
                  scope="col"
                  className="text-md font-medium text-labelGrey font-medium px-6 py-4 text-left"
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="text-md font-medium text-labelGrey font-medium px-6 py-4 text-left"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient: any) => (
                <tr key={patient.id} className="bg-gray-100 h-4 border-b">
                  <td className="px-6 py-1 whitespace-nowrap text-sm  text-gray-600">
                    {patient.id}
                  </td>
                  <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                    {patient.name}
                  </td>
                  <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                    {patient.phone}
                  </td>
                  <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                    {getAgeInYears(patient.dob)}
                  </td>
                  <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                    <Button
                      text="View Details"
                      Icon={FaEye}
                      onClick={(e: any) => {
                        e.preventDefault();
                        history.push(
                          APP_ROUTES.PATIENT_DETAILS_ALIAS(patient.id)
                        );
                      }}
                    />
                  </td>
                </tr>
              ))}
              {/* <tr className="bg-transparent border-b">
                <td className="px-6 py-1 whitespace-nowrap text-sm  text-gray-600">
                  1
                </td>
                <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                  Ketan Verma
                </td>
                <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                  9999000099
                </td>
                <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                  24
                </td>
                <td className="text-sm text-gray-600 font-light px-6 py-1 whitespace-nowrap">
                  <Button
                    text="View Details"
                    Icon={FaEye}
                    onClick={(e: any) => {
                      e.preventDefault();
                      history.push(APP_ROUTES.PATIENT_DETAILS_ALIAS(2));
                    }}
                  />
                </td>
              </tr> */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewPatients;
