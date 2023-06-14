import Field from './Field';
import './collection.css';

const Collection = ({colections, changeColections}) => {
  return (
    <div className="collection-collection">
      {
        colections && colections.length > 0 ?
        colections.map(({value}, index) => {
          return (
            <Field value={value} key={index}/>
          );
        }) :
        null
      }
    </div>
  );
};

export default Collection;
