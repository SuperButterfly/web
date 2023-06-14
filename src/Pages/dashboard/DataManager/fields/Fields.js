import FieldForm from './FieldForm';
import './fields.css';

const Fields = () => {
  return (
    <div className={`fields-container`}>
      <FieldForm />
      <button type="button" className="fields-button">
        <span className="fields-text">
          <span className="">add field</span>
          <br className=""></br>
        </span>
      </button>
    </div>
  );
};

export default Fields;

