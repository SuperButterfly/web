import './tag.css';

const urlbase = '/workspace/assets/';
const Tag = ({title, src, size}) => {
  
  return (
    <div className="tag-container">
      <img src={`${urlbase}${src}.svg`} alt={title} className={size ? "tag-image" + size : 'tag-image'} />
      <span className={size ? "tag-text" + size : "tag-text"}>{title}</span>
    </div>
  );
};

export default Tag;