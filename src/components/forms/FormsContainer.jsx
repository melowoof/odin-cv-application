/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/FormsContainer.css";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import EmploymentForm from "./EmploymentForm";
import DeletableInput from "./DeletableInput";
import Button from "../common/Button";
import { Fragment } from "react";
import Resume from "../Resume";

function FormsContainer({ selectedSidebarItem }) {
  const [personalForm, setPersonalForm] = useState({
    firstName: "Lizzy",
    lastName: "Grant",
    email: "honeymoon@gmail.com",
    phone: "555-9275",
    address: "Paris, USA",
    linkedin: "Honeymoon",
    portfolio: "www.lanadelrey.com",
    desc: "Lana Del Rey is an american artist",
  });
  const [educationForms, setEducationForms] = useState([
    {
      key: Math.random(),
      qualification: "Bachelors of Computer Engineering",
      school: "Lycée Français de New York",
      location: "New York",
      start: "08/2021",
      end: "05/2024",
    },
  ]);
  const [employmentForms, setEmploymentForms] = useState([
    {
      key: Math.random(),
      position: "Back End Developer",
      employer: "Twitter",
      location: "California, USA",
      start: "09/2026",
      end: "",
      desc: "Responsible for implementing UI designs on the front end. ",
    },
  ]);
  const [skillForms, setSkillForms] = useState([
    { key: Math.random(), skill: "Singing" },
  ]);
  const [languageForms, setLanguageForms] = useState([
    { key: Math.random(), language: "English" },
  ]);
  const [interestForms, setInterestForms] = useState([
    { key: Math.random(), interest: "Music" },
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
                  desc: "",
                },
                setEmploymentForms
              )
            }
          />
        </>
      )}
      {selectedSidebarItem === "skills" && (
        <>
          {skillForms.map((formData, index) => (
            <Fragment key={formData.key}>
              <DeletableInput
                handleFormData={(event) =>
                  handleFormArrayData(event, skillForms, index, setSkillForms)
                }
                handleDeleteForm={() =>
                  deleteForm(index, skillForms, setSkillForms)
                }
                id={"skill"}
                placeholder={"JavaScript"}
                formDataValue={formData.skill}
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
                setSkillForms
              )
            }
          />
        </>
      )}
      {selectedSidebarItem === "languages" && (
        <>
          {languageForms.map((formData, index) => (
            <Fragment key={formData.key}>
              <DeletableInput
                handleFormData={(event) =>
                  handleFormArrayData(
                    event,
                    languageForms,
                    index,
                    setLanguageForms
                  )
                }
                handleDeleteForm={() =>
                  deleteForm(index, languageForms, setLanguageForms)
                }
                id={"language"}
                placeholder={"English"}
                formDataValue={formData.language}
              />
            </Fragment>
          ))}
          <Button
            text={"Add Entry"}
            onClick={() =>
              addForm(
                {
                  key: Math.random(),
                  language: "",
                },
                setLanguageForms
              )
            }
          />
        </>
      )}
      {selectedSidebarItem === "interests" && (
        <>
          {interestForms.map((formData, index) => (
            <Fragment key={formData.key}>
              <DeletableInput
                handleFormData={(event) =>
                  handleFormArrayData(
                    event,
                    interestForms,
                    index,
                    setInterestForms
                  )
                }
                handleDeleteForm={() =>
                  deleteForm(index, interestForms, setInterestForms)
                }
                id={"interest"}
                placeholder={"Film"}
                formDataValue={formData.interest}
              />
            </Fragment>
          ))}
          <Button
            text={"Add Entry"}
            onClick={() =>
              addForm(
                {
                  key: Math.random(),
                  interest: "",
                },
                setInterestForms
              )
            }
          />
        </>
      )}
      {selectedSidebarItem === "resume" && (
        <>
          <Resume
            personalForm={personalForm}
            educationForms={educationForms}
            employmentForms={employmentForms}
            skillForms={skillForms}
            languageForms={languageForms}
            interestForms={interestForms}
          />
          {/* <Button
            text={"Download PDF"}
            onClick={() =>
              addForm(
                {
                  key: Math.random(),
                  interest: "",
                },
                setInterestForms
              )
            }
          /> */}
        </>
      )}
    </div>
  );
}

export default FormsContainer;
