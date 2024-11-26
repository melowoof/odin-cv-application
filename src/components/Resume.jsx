/* eslint-disable react/prop-types */
import "../styles/Resume.css";

function Resume({
  personalForm,
  educationForms,
  employmentForms,
  skillForms,
  languageForms,
  interestForms,
}) {
  return (
    <div className="resume">
      <h1 className="name">
        {personalForm.firstName} {personalForm.lastName}
      </h1>
    </div>
  );
}

export default Resume;
