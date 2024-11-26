/* eslint-disable react/prop-types */
import Input from "../Input";
import IconButton from "../buttons/IconButton";
import "../../styles/DeletableInput.css";

function DeletableInput({
  handleFormData,
  handleDeleteForm,
  id,
  placeholder,
  formDataValue,
}) {
  return (
    <div className="input-delete-group">
      <Input
        id={id}
        label={""}
        type={"text"}
        placeholder={placeholder}
        value={formDataValue}
        onChange={handleFormData}
      />
      <IconButton
        icon={"src/assets/icons/icons8-long-x-24.png"}
        onClick={handleDeleteForm}
      />
    </div>
  );
}

export default DeletableInput;
