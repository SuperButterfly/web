import './tele-modal.css';

const TeleModal = ({teledata, handleChangeModal1, handleModal1}) => {
  
  return (
    <div className="tele-modal-container">
      <div className="tele-modal-container1">
        <label className="">
          <span className="">Name:</span>
          <br className=""></br>
        </label>
        <input
          type="text"
          placeholder="of your project"
          className="tele-modal-textinput"
          name="name"
          value={teledata.name}
          onChange={handleChangeModal1}
        />
      </div>
      <div className="tele-modal-container2">
        <label className="">Link:</label>
        <input
          type="text"
          placeholder="share link"
          className="tele-modal-textinput1"
          name="URL"
          value={teledata.URL}
          onChange={handleChangeModal1}
        />
      </div>
      <div className="tele-modal-container3">
        <button 
          type="button" 
          className="tele-modal-button"
          onClick={(e) => handleModal1('import')}
        >
          Import
        </button>
        <button 
          type="button"
          className="tele-modal-button1"
          onClick={(e) => handleModal1('cancel')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TeleModal;
