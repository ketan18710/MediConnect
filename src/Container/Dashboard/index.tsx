import React from "react";
import AddPatient from "../../Components/Dashboard/Doctor/AddPatient";
import PatientDetails from "../../Components/Dashboard/Doctor/PatientDetails";
import ViewPatients from "../../Components/Dashboard/Doctor/ViewPatients";
import User from "../../Components/Dashboard/Users/EditUserProfile";
import Onboarding from "../../Components/Dashboard/Users/Onboarding";
import { APP_ROUTES } from "../../utils";
import Sidebar from "./Sidebar";
const Dashboard = (props: any) => {
  console.log(props);
  const { history, match } = props;
  const { path, params } = match;
  const renderDashboardScreen = () => {
    console.log(path.split("/")[1]);
    switch ("/" + path.split("/")[1]) {
      case APP_ROUTES.PATIENTS:
        return <ViewPatients {...props} />;
        break;
      case APP_ROUTES.DASHBOARD:
        return <h3>HOME</h3>;
        break;
      case APP_ROUTES.PATIENT_DETAILS_PREFIX:
        return <PatientDetails {...props} />;
        break;
      case APP_ROUTES.ADD_NEW_PATIENT:
        return <AddPatient {...props} />;
        break;
      case APP_ROUTES.EDIT_PROFILE:
        return <User {...props} />;
        break;
      case APP_ROUTES.ONBOARDING:
        return <Onboarding {...props} />;
        break;

      default:
        return <h3>default</h3>;
        break;
    }
  };
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <Sidebar {...props} />
      <div className="w-[96%] h-full p-8 box-border overflow-x-hidden overflow-y-auto">
        {renderDashboardScreen()}
      </div>
    </div>
  );
};

export default Dashboard;
