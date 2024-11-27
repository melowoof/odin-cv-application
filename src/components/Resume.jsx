/* eslint-disable react/prop-types */
import { useRef } from "react";
import "../styles/Resume.css";
import Button from "./common/Button";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

function Resume({
  personalForm,
  educationForms,
  employmentForms,
  skillForms,
  languageForms,
  interestForms,
}) {
  const resumeRef = useRef();

  function downloadPDF() {
    html2canvas(resumeRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  }

  return (
    <div className="pdf-container">
      <div className="resume" ref={resumeRef}>
        <div className="header">
          <h1 className="name">
            {personalForm.firstName} {personalForm.lastName}
          </h1>
          <div className="header-info">
            <div className="email">
              <img
                src="src/assets/icons/icons8-email-24-3.png"
                className="icon"
              />
              {personalForm.email}
            </div>
            <div className="phone">
              <img
                className="icon"
                src="src/assets/icons/icons8-phone-24-2.png"
              />
              {personalForm.phone}
            </div>
            <div className="address">
              {" "}
              <img
                src="src/assets/icons/icons8-location-24-3.png"
                className="icon"
              />
              {personalForm.address}
            </div>
          </div>
          <div className="header-info">
            <div className="portfolio">
              <img
                className="icon"
                src="src/assets/icons/icons8-website-24.png"
              />
              {personalForm.portfolio}
            </div>
            <div className="linkedin">
              <img
                src="src/assets/icons/icons8-linkedin-24.png"
                className="icon"
              />
              {personalForm.linkedin}
            </div>
          </div>
        </div>
        <div className="body">
          <div className="main-body">
            <div className="section-container">
              {educationForms.length > 0 && (
                <h2 className="section-title">Education</h2>
              )}
              <div className="sections">
                {educationForms.map((formData) => (
                  <div className="section" key={formData.key}>
                    <div className="qualification">
                      {formData.qualification}, {formData.school}
                    </div>
                    <div className="location">
                      <img
                        className="icon"
                        src="src/assets/icons/icons8-location-24-2.png"
                      />
                      {formData.location}
                    </div>
                    <div className="period">
                      {formData.start}—{formData.end}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-container">
              {employmentForms.length > 0 && (
                <h2 className="section-title">Experience</h2>
              )}
              <div className="sections">
                {employmentForms.map((formData) => (
                  <div className="section" key={formData.key}>
                    <div className="qualification">
                      {formData.position}, {formData.employer}
                    </div>
                    <div className="location">
                      {" "}
                      <img
                        className="icon"
                        src="src/assets/icons/icons8-location-24-2.png"
                      />
                      {formData.location}
                    </div>
                    <div className="period">
                      {formData.start}—{formData.end}
                    </div>
                    <div className="desc">{formData.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sidebar-body">
            {skillForms.length > 0 && (
              <h2 className="section-sidebar-title">Skills</h2>
            )}
            {skillForms.map((formData) => (
              <div className="skill list-item" key={formData.key}>
                {formData.skill}
              </div>
            ))}
            {languageForms.length > 0 && (
              <h2 className="section-sidebar-title">Languages</h2>
            )}
            {languageForms.map((formData) => (
              <div className="skill list-item" key={formData.key}>
                {formData.language}
              </div>
            ))}
            {interestForms.length > 0 && (
              <h2 className="section-sidebar-title">Interests</h2>
            )}
            {interestForms.map((formData) => (
              <div className="skill list-item" key={formData.key}>
                {formData.interest}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text={"Download PDF"} onClick={downloadPDF} />
    </div>
  );
}

export default Resume;
