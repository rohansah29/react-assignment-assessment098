import React from "react";
const Post = ({title,body}) => {
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */title}
      </h1>
      <h3>
        {/* Here show the body of the post  */body}
      </h3>
    </div>
  );
};

export default Post;
