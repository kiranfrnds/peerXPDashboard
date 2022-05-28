import React from "react";
import "../Css/PostCardComponentLink.css";
function PostCardComponent({ title, custom_excerpt, url, excerpt }) {
  return (
    <div className="PostCardComponent">
      <a href={url} target="_blank" rel="noreferrer noopener">
        <h4>{title}</h4>
        <p>{custom_excerpt ? custom_excerpt : excerpt}</p>
      </a>
    </div>
  );
}

export default PostCardComponent;
