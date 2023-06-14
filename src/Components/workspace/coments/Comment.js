import Tag from './Tag.js';
import './comment.css';

const Comment = ({ comment, reaction, cardImage, tags }) => {

  console.log(tags.length);
  
  return (
    <div className="comment-container">
      <div className="comment-container1">
        {
          (tags && tags.length > 0 )
          ?
            tags.map((tag, idx) => (
              <Tag title={tag.title} src={tag.src} key={idx} />
            ))
          :
            null
        }
        <h3 className="comment-title">{`${comment.statustag} - ${comment.subject}`}</h3>
        <div className="comment-comment-container">
          <span className="comment-user">{comment.user}</span>
          <span>:</span>
          <span className="comment-text">{comment.body}</span>
        </div>
        <div className="comment-body">
          <div className="comment-reactions">
            <img
              src={reaction.iconsrc}
              alt={reaction.iconname}
              className="comment-reaction-icon"
            />
            <span className="comment-reactions-count">
              {reaction.count}
            </span>
          </div>
          <div className="comment-container2">
            <svg viewBox="0 0 1024 1024" className="comment-reviews-icon">
              <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
            </svg>
            <span className="comment-reviews-count">{comment.reviewsCount}</span>
          </div>
          <span className="comment-text1">· {comment.createdAt}</span>
        </div>
      </div>
      <img
        src={cardImage.src}
        alt={cardImage.title}
        className="comment-image"
      />
    </div>
  );
};

export default Comment;
