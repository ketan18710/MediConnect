import React from "react";
import { Button } from "../../Common";
import { FaPlus, FaEye } from "react-icons/fa";
import ScreenTitle from "../../Common/ScreenTitle";
import { APP_ROUTES } from "../../../utils";
const ViewPatients = (props: any) => {
  const { history } = props;
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
      <div className="w-full my-8 patientsTable">
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
            <tr className="bg-gray-100 h-4 border-b">
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
                    history.push(APP_ROUTES.PATIENT_DETAILS_ALIAS(1));
                  }}
                />
              </td>
            </tr>
            <tr className="bg-transparent border-b">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPatients;
