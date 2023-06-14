import './field-form.css';

const FieldForm = () => {
  return (
    <div className="field-form-field-form">
      <div className="field-form-container">
        <span>Field:</span>
        <input
          type="text"
          placeholder="name field"
          className="field-form-textinput"
        />
      </div>
      <div className="field-form-container1">
        <span>
          <span>type:</span>
          <br></br>
        </span>
        <select name="type" className="field-form-select">
          <option value="text" selected>text</option>
          <option value="images">images</option>
          <option value="enum">options</option>
        </select>
      </div>
    </div>
  );
};

export default FieldForm;
