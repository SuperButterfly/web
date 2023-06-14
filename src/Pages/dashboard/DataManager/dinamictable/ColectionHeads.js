import ColectionHead from './ColectionHead';
import './colection-heads.css';

const ColectionHeads = ({ heads }) => {
  return (
    <div className="colection-heads-colection-heads">
    {
      heads && heads.length > 0 ?
      heads.map((field, index) => {
        return (
          <ColectionHead value={field} key={index}/>
        );
      }) :
      null
    }
    </div>
  );
};

export default ColectionHeads;
