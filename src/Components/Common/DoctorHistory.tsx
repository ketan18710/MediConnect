import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import Chip from "./Chip";
import { Input } from "./Input";

const DoctorHistory = (props: any) => {
  interface qualificationObjInterface {
    start_year: string;
    end_year: string;
    college: string;
    degree: string;
  }
  const qualificationObj = {
    start_year: "",
    end_year: "",
    college: "",
    degree: "",
  };
  const [qualifications, setQualifications] = useState<
    qualificationObjInterface[]
  >([]);

  const [specialisations, setSpecialisations] = useState<string[]>([
    "Radiology",
    "Pathology",
  ]);
  const [newSpecialisation, setNewSpecialisation] = useState<string>("");
  const updateQualification = (key: string, val: string, index: number) => {
    setQualifications(
      qualifications.map((qual, qualIndex) => {
        if (qualIndex === index) {
          qual = {
            ...qual,
            [key]: val,
          };
        }
        return qual;
      })
    );
  };
  const removeSpecialisations = (index: number) => {
    setSpecialisations(
      specialisations.filter((spec, specIndex) => specIndex !== index)
    );
  };
  return (
    <div className="DoctorHistory">
      <h3 className="text-labelGrey text-2xl my-4 patientReports">
        Your Education history :
      </h3>
      <div className="w-full flex my-2 items-center justify-start">
        <Button
          text="Add New Row"
          Icon={FaPlus}
          onClick={(e: Event) => {
            e.preventDefault();
            setQualifications([...qualifications, qualificationObj]);
          }}
        />
      </div>
      {qualifications.map((qualification, index) => (
        <div className="w-full my-3 flex items-center justify-between gap-x-2 f flex-wrap ">
          <h4 className="text-labelGrey w-full text-xl my-2">
            Row {index + 1}
          </h4>
          <Input
            type="text"
            label="Start Year"
            customClass="w-[49%]"
            value={qualification.start_year}
            onChange={(e: any) =>
              updateQualification("start_year", e.target.value, index)
            }
            placeholder="Start Year"
          />
          <Input
            type="text"
            label="End Year"
            customClass="w-[49%]"
            value={qualification.end_year}
            onChange={(e: any) =>
              updateQualification("end_year", e.target.value, index)
            }
            placeholder="End Year"
          />
          <Input
            type="text"
            label="College Name"
            customClass="w-[49%]"
            value={qualification.college}
            onChange={(e: any) =>
              updateQualification("college", e.target.value, index)
            }
            placeholder="College Name"
          />
          <Input
            type="text"
            label="Degree"
            customClass="w-[49%]"
            value={qualification.degree}
            onChange={(e: any) =>
              updateQualification("degree", e.target.value, index)
            }
            placeholder="Degree"
          />
        </div>
      ))}
      {qualifications.length > 0 && (
        <div className="w-full flex my-8 items-center justify-start">
          <Button
            text="Save Qualification"
            Icon={FaPlus}
            onClick={(e: Event) => {
              e.preventDefault();
              console.log(qualifications);
            }}
          />
        </div>
      )}
      <h3 className="text-labelGrey text-2xl my-4 patientReports">
        Your Specialities :
        <div className="w-full flex items-center justify-between gap-8">
          <Input
            type="text"
            customClass="w-9/12"
            value={newSpecialisation}
            onChange={(e: any) => setNewSpecialisation(e.target.value)}
            placeholder="Enter Specialisation"
          />
          <Button
            text="Save"
            customClass="w-3/12 "
            onClick={(e: Event) => {
              e.preventDefault();
              setSpecialisations([...specialisations, newSpecialisation]);
              setNewSpecialisation("");
            }}
          />
        </div>
        <div className="w-full  flex items-center justify-start gap-2 f flex-wrap">
          {specialisations.map((specialisation, index) => (
            <Chip
              Icon={FaTimes}
              iconFunc={(e: Event) => {
                e.preventDefault();
                removeSpecialisations(index);
              }}
              key={index}
              text={specialisation}
            />
          ))}
        </div>
      </h3>
    </div>
  );
};

export default DoctorHistory;
