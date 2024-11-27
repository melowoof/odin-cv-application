/* eslint-disable react/prop-types */
import "../../styles/Form.css";
import IconButton from "../common/IconButton";

function Form({ title, children, hasDeleteButton = false, handleDeleteForm }) {
  return (
    <form className="form-container">
      <div className="form-header">
        <h4 className="form-title">{title}</h4>
        {hasDeleteButton && (
          <IconButton
            icon={"src/assets/icons/icons8-long-x-24.png"}
            onClick={handleDeleteForm}
          />
        )}
      </div>
      {children}
    </form>
  );
}

export default Form;
