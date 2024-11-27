/* eslint-disable react/prop-types */
import Form from "./Form";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

function EmploymentForm({ formData, handleFormData, handleDeleteForm }) {
  return (
    <Form
      title={"Employment"}
      hasDeleteButton={true}
      handleDeleteForm={handleDeleteForm}
    >
      <div className="input-group">
        <Input
          id={"position"}
          label={"Job Position"}
          type={"text"}
          placeholder={"Back End Developer"}
          value={formData.position}
          onChange={handleFormData}
        />
        <Input
          id={"location"}
          label={"Location"}
          type={"text"}
          placeholder={"California, USA"}
          value={formData.location}
          onChange={handleFormData}
        />
      </div>
      <div className="input-group">
        <Input
          id={"employer"}
          label={"Employer"}
          type={"text"}
          placeholder={"Twitter"}
          value={formData.employer}
          onChange={handleFormData}
        />
      </div>
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
      <div className="input-group">
        <Textarea
          id={"desc"}
          label={"Description"}
          rows={5}
          placeholder={
            "Descriptions of tasks, responsibilities, or achievements you've had in this role."
          }
          value={formData.desc}
          onChange={handleFormData}
        />
      </div>
    </Form>
  );
}

export default EmploymentForm;
