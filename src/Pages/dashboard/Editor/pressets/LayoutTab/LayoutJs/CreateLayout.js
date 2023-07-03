import "../LayoutCss/Create.css";

const CreateLayout = () => {
  return (
    <div className="tokens-panel-container position">
      <span className="tokens-panel-title">New Size Token</span>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-form-field">
              <div className="pt-stack" style={{ alignItems: "flex-start" }}>
                <div className="label-group"></div>
                <div className="pt-form-input-container">
                  <div className="pt-input flexible boxed">
                    <div className="input-addon-wrapper">
                      <input
                        type="text"
                        placeholder="Name"
                        className="jsx-2523288086 "
                        value=""
                      />
                      <fieldset className="input-border">
                        <legend className="input-border-label"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <span className="unit-input ">
              <input
                type="text"
                placeholder="Value"
                className="jsx-3684697000 "
                value=""
              />
              <span className="unit hidden"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="thq-panel-section">
        <div className="section-content regular">
          <div className="pt-stack" style={{ alignItems: "flex-start" }}>
            <div className="pt-btn-group">
              <button disabled="" className="pt-btn solid accent">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLayout;
