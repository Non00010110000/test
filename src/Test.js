import React from "react";

const C = ({ comments, currentUser }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className={`comment-${comment.id}`}>
          <div className="btn">
            <button>
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">

              </svg>
            </button>
            <span className="like">{comment.score}</span>
            <button>
              <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                
              </svg>
            </button>
          </div>
          <div className="img_content">
            <div className="img">
              <img src={comment.user.image.png} alt="User Avatar" />
              <span className="name">{comment.user.username}</span>
              <span className="date">{comment.createdAt}</span>
            </div>
            <span>{comment.user.username}</span>
          </div>
          <div className="reply">
            <a>
              <svg
                className="sv"
                width="14"
                height="13"
                xmlns="http://www.w3.org/2000/svg"
              >
                
              </svg>
              Reply
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default C;