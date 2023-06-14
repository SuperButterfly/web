import ColectionHeads from './ColectionHeads';
import Collection from './Collection';
import './dinamic-table.css';

const DinamicTable = ({colections, changeColections, heads}) => {
  return (
    <div className={`dinamic-table-container`}>
      <ColectionHeads heads={heads} />
      <Collection colections={colections} changeColections={changeColections}/>
      <button type="button" className="dinamic-table-button">
        <svg viewBox="0 0 1024 1024" className="dinamic-table-icon">
          <path
            d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default DinamicTable;
