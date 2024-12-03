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
            icon={
              "https://img.icons8.com/?size=100&id=Qgjnp78cDeJi&format=png&color=000000"
            }
            onClick={handleDeleteForm}
          />
        )}
      </div>
      {children}
    </form>
  );
}

export default Form;
