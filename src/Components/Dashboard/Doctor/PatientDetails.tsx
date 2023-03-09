import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadDocument } from "../../../redux/actions";
import { API_CONSTANTS } from "../../../utils";
import { Button, Input } from "../../Common";
import Loader from "../../Common/Loader";
import PatientForm from "../../Common/PatientForm";
import PdfViewer from "../../Common/PdfViewer";
import ScreenTitle from "../../Common/ScreenTitle";

const PatientDetails = (props: any) => {
  const { showUpload } = props;
  const [loader, setLoader] = useState(false);
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
  const dispatch: any = useDispatch();
  const uploadDocumentSelector = useSelector(
    (state: any) => state.UserReducer.uploadDocument
  );
  const submitMediaFormFunc = (media: any) => {
    const formData = new FormData();
    formData.append("image", media);
    dispatch(uploadDocument(formData));
  };
  // useEffect(() => {
  //   // if (use.data) {
  //   //   setLoader(true);
  //   // }
  // }, [uploadDocumentSelector]);
  return (
    <div className="PatientDetails">
      <ScreenTitle title={"Patient Name"} />
      {!loader ? (
        <>
          <PatientForm
            editOption={true}
            submitFunc={(form: object) => console.log(form)}
          />
          <h3 className="text-labelGrey text-2xl my-8 patientReports">
            Patient Reports
          </h3>
          {
            // showUpload &&
            <Input
              type="file"
              value={null}
              placeholder="Enter file"
              disabled={uploadDocumentSelector.status === API_CONSTANTS.loading}
              onChange={(e: any) => {
                submitMediaFormFunc(e.target.files[0]);
                // setLoader(true);
                // setTimeout(() => {
                //   setLoader(false);
                //   setReports([
                //     ...reports,
                //     {
                //       name: `Report ${reports.length + 1}`,
                //       date: "2023-01-04",
                //       id: reports.length + 1,
                //       link: "http://africau.edu/images/default/sample.pdf",
                //     },
                //   ]);
                // }, 1500);
              }}
            />
          }
          {reports.map((report) => (
            <div key={report.id} className="patientReport">
              <h4 className="text-labelGrey text-xl my-6">
                {report.name} ({report.date})
              </h4>
              <PdfViewer link={report.link} />
            </div>
          ))}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};

export default PatientDetails;
