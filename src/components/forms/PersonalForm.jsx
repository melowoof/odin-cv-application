/* eslint-disable react/prop-types */
import Input from "../common/Input";
import Form from "./Form";
import Textarea from "../common/Textarea";

function PersonalForm({ formData, handleFormData }) {
  return (
    <Form title={"Personal details"}>
      <div className="input-group">
        <Input
          id={"firstName"}
          label={"First name"}
          type={"text"}
          placeholder={"Lizzy"}
          value={formData.firstName}
          onChange={handleFormData}
        />
        <Input
          id={"lastName"}
          label={"Last name"}
          type={"text"}
          placeholder={"Grant"}
          value={formData.lastName}
          onChange={handleFormData}
        />
      </div>
      <div className="input-group">
        {" "}
        <Input
          id={"email"}
          label={"Email"}
          type={"email"}
          placeholder={"honeymoon@icloud.com"}
          value={formData.email}
          onChange={handleFormData}
        />
        <Input
          id={"phone"}
          label={"Phone"}
          type={"phone"}
          placeholder={"555-9275"}
          value={formData.phone}
          onChange={handleFormData}
        />
      </div>
      <div className="input-group">
        <Input
          id={"address"}
          label={"City and Country"}
          type={"text"}
          placeholder={"Paris, USA"}
          value={formData.address}
          onChange={handleFormData}
        />
      </div>
      <div className="input-group">
        <Input
          id={"linkedin"}
          label={"LinkedIn / Indeed"}
          type={"text"}
          placeholder={"Honeymoon"}
          value={formData.linkedin}
          onChange={handleFormData}
        />
        <Input
          id={"portfolio"}
          label={"Portfolio"}
          type={"text"}
          placeholder={"www.lanadelrey.com"}
          value={formData.portfolio}
          onChange={handleFormData}
        />
      </div>
      <div className="input-group">
        <Textarea
          id={"desc"}
          label={"Description"}
          rows={5}
          placeholder={"A short description of yourself..."}
          value={formData.desc}
          onChange={handleFormData}
        />
      </div>
    </Form>
  );
}

export default PersonalForm;
