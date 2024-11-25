/* eslint-disable react/prop-types */
import Input from "../Input";
import Form from "./Form";
import IconButton from "../buttons/IconButton";
import "../../styles/SkillsForm.css"

function SkillsForm({ formData, handleFormData, handleDeleteForm }) {
  return (
    // <Form
    //   title={""}
    //   hasDeleteButton={true}
    //   handleDeleteForm={handleDeleteForm}
    // >
    //   <div className="input-group">
    <div className="input-delete-group">
      <Input
        id={"skill"}
        label={""}
        type={"text"}
        placeholder={"JavaScript"}
        value={formData.qualification}
        onChange={handleFormData}
      />
      <IconButton
        icon={"src/assets/icons/icons8-long-x-24.png"}
        onClick={handleDeleteForm}
      />
    </div>
    //   </div>
    // </Form>
  );
}

export default SkillsForm;
