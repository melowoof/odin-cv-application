/* eslint-disable react/prop-types */
import Input from "../common/Input";
import Form from "./Form";

function EducationForm({ formData, handleFormData, handleDeleteForm }) {
  return (
    <Form
      title={"Education"}
      hasDeleteButton={true}
      handleDeleteForm={handleDeleteForm}
    >
      <div className="input-group">
        <Input
          id={"qualification"}
          label={"Qualification"}
          type={"text"}
          placeholder={"Bachelors of Computer Engineering"}
          value={formData.qualification}
          onChange={handleFormData}
        />
      </div>
      <div className="input-group">
        <Input
          id={"school"}
          label={"School"}
          type={"text"}
          placeholder={"Lycée Français de New York"}
          value={formData.school}
          onChange={handleFormData}
        />
        <Input
          id={"location"}
          label={"Location"}
          type={"text"}
          placeholder={"New York"}
          value={formData.location}
          onChange={handleFormData}
        />
      </div>
      {/* <div className="input-group">
      </div> */}
      <div className="input-group">
        <Input
          id={"start"}
          label={"Start date"}
          type={"text"}
          placeholder={"MM/YYYY"}
          value={formData.start}
          onChange={handleFormData}
        />
        <Input
          id={"end"}
          label={"End date"}
          type={"text"}
          placeholder={"MM/YYYY"}
          value={formData.end}
          onChange={handleFormData}
        />
      </div>
    </Form>
  );
}

export default EducationForm;
