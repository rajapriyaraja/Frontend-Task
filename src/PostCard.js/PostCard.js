import React from 'react';
import './PostCard.css';
import { FaHeart, FaRegCommentDots, FaInfoCircle } from 'react-icons/fa';

const PostCard = ({ post }) => {
  if (!post) return null; // Prevent rendering if post is undefined

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.avatar} alt="User Avatar" className="avatar" />
        <div className="post-info">
          <h4>{post.name}</h4>
          <p className="post-time">
            First posted at {post.firstPosted} on {post.firstPostedDate}
          </p>
          <p className="post-edited">
            Last edited at {post.lastEdited} on {post.lastEditedDate}
          </p>
        </div>
        <FaInfoCircle className="info-icon" />
      </div>
      <div className="post-body">
        <p>{post.content}</p>
        <button className="expand-btn">Expand Story</button>
      </div>
      <div className="post-footer">
        <div className="footer-icons">
          <FaHeart className="icon" />
          <span>{post.likes}</span>
          <FaRegCommentDots className="icon" />
          <span>{post.comments}</span>
        </div>
        <div className="comment-section">
          <img src={post.avatar} alt="User Avatar" className="comment-avatar" />
          <input type="text" placeholder="Write a comment..." className="comment-input" />
          <button className="post-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
