import React, { useState } from "react";
import PatientForm from "../../Common/PatientForm";
import PdfViewer from "../../Common/PdfViewer";
import ScreenTitle from "../../Common/ScreenTitle";

const PatientDetails = (props: any) => {
  const [editPatient, setEditPatient] = useState(false);
  const [reports, setReports] = useState([
    {
      name: "Report 1",
      date: "2023-01-03",
      id: 1,
      link: "http://africau.edu/images/default/sample.pdf",
    },
    {
      name: "Report 2",
      date: "2023-01-03",
      id: 2,
      link: "http://africau.edu/images/default/sample.pdf",
    },
    {
      name: "Report 3",
      date: "2023-01-03",
      id: 3,
      link: "http://africau.edu/images/default/sample.pdf",
    },
  ]);
  return (
    <div className="PatientDetails">
      <ScreenTitle title={"Patient Name"} />
      <PatientForm
        editOption={true}
        submitFunc={(form: object) => console.log(form)}
      />
      <h3 className="text-labelGrey text-2xl my-8 patientReports">
        Patient Reports
      </h3>
      {reports.map((report) => (
        <div key={report.id} className="patientReport">
          <h4 className="text-labelGrey text-xl my-6">
            {report.name} ({report.date})
          </h4>
          <PdfViewer link={report.link} />
        </div>
      ))}
    </div>
  );
};

export default PatientDetails;
