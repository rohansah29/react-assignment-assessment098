// Your code goes here
import React,{ useState } from "react";



// do a default export
function UserCard({name, avatar, posts, followers, address}) {
    const [change, setchange] = useState(false);
  return (
    <div>
      <img src={avatar} alt={name} style={{borderRadius:"50%"}} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid = "user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid = "user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid = "user_followers">{followers}</p>
      <button onClick={()=>{setchange(!change)}}>{change ? "following" : "follow"}</button>
    </div>
  );
}

export default UserCard;
