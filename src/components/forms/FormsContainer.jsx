/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/FormsContainer.css";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import EmploymentForm from "./EmploymentForm";
import SkillsForm from "./SkillsForm";
import Button from "../buttons/Button";
import { Fragment } from "react";

function FormsContainer({ selectedSidebarItem }) {
  const [personalForm, setPersonalForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    portfolio: "",
    desc: "",
  });
  const [educationForms, setEducationForms] = useState([
    {
      key: Math.random(),
      qualification: "",
      school: "",
      location: "",
      start: "",
      end: "",
    },
    {
      key: Math.random(),
      qualification: "",
      school: "",
      location: "",
      start: "",
      end: "",
    },
  ]);
  const [employmentForms, setEmploymentForms] = useState([
    {
      key: Math.random(),
      position: "",
      employer: "",
      location: "",
      start: "",
      end: "",
    },
  ]);
  const [skillsForms, setSkillsForms] = useState([
    { key: Math.random(), skill: "" },
  ]);

  function getUpdatedForms(forms, id, value, index) {
    return forms.map((form, i) => {
      if (i === index) {
        return { ...form, [id]: value };
      }
      return form;
    });
  }

  function handleFormData(event, formData, setCallback) {
    setCallback({ ...formData, [event.target.id]: event.target.value });
  }

  function handleFormArrayData(event, formsData, index, setCallback) {
    const updatedForms = getUpdatedForms(
      formsData,
      event.target.id,
      event.target.value,
      index
    );
    setCallback(updatedForms);
  }

  function addForm(formTemplate, setCallback) {
    setCallback((prevForms) => [...prevForms, formTemplate]);
  }

  function deleteForm(index, forms, setCallback) {
    const updatedForms = forms.filter((_, i) => i !== index);
    setCallback(updatedForms);
  }

  return (
    <div className="forms-container">
      {selectedSidebarItem === "personal" && (
        <PersonalForm
          formData={personalForm}
          handleFormData={(event) =>
            handleFormData(event, personalForm, setPersonalForm)
          }
        />
      )}
      {selectedSidebarItem === "education" && (
        <>
          {educationForms.map((formData, index) => (
            <Fragment key={formData.key}>
              <EducationForm
                formData={formData}
                handleFormData={(event) =>
                  handleFormArrayData(
                    event,
                    educationForms,
                    index,
                    setEducationForms
                  )
                }
                handleDeleteForm={() =>
                  deleteForm(index, educationForms, setEducationForms)
                }
              />
            </Fragment>
          ))}
          <Button
            text={"Add Entry"}
            onClick={() =>
              addForm(
                {
                  key: Math.random(),
                  qualification: "",
                  school: "",
                  location: "",
                  start: "",
                  end: "",
                },
                setEducationForms
              )
            }
          />
        </>
      )}
      {selectedSidebarItem === "employment" && (
        <>
          {employmentForms.map((formData, index) => (
            <Fragment key={formData.key}>
              <EmploymentForm
                formData={formData}
                handleFormData={(event) =>
                  handleFormArrayData(
                    event,
                    employmentForms,
                    index,
                    setEmploymentForms
                  )
                }
                handleDeleteForm={() =>
                  deleteForm(index, employmentForms, setEmploymentForms)
                }
              />
            </Fragment>
          ))}
          <Button
            text={"Add Entry"}
            onClick={() =>
              addForm(
                {
                  key: Math.random(),
                  position: "",
                  employer: "",
                  location: "",
                  start: "",
                  end: "",
                },
                setEmploymentForms
              )
            }
          />
        </>
      )}
      {selectedSidebarItem === "skills" && (
        <>
          {skillsForms.map((formData, index) => (
            <Fragment key={formData.key}>
              <SkillsForm
                formData={formData}
                handleFormData={(event) =>
                  handleFormArrayData(event, skillsForms, index, setSkillsForms)
                }
                handleDeleteForm={() =>
                  deleteForm(index, skillsForms, setSkillsForms)
                }
              />
            </Fragment>
          ))}
          <Button
            text={"Add Entry"}
            onClick={() =>
              addForm(
                {
                  key: Math.random(),
                  skill: "",
                },
                setEmploymentForms
              )
            }
          />
        </>
      )}
    </div>
  );
}

export default FormsContainer;
