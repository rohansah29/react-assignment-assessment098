
const UserCard = ({name,avatar,address,id,posts,isMarried,followers}) => {

  const handleClick=()=>{
    alert(`You are now following ${name}`)
  }


  return <div key={id} data-testid="user-card">
    <img src={avatar} alt="" />
    <h2 data-testid="user_name">{name}</h2>
    <p data-testid="user_address">{address}</p>
    <h3>Posts</h3>
    <p data-testid="user_posts">{posts}</p>
    <h3>Followers</h3>
    <p data-testid="user_followers">{followers}</p>
    <h3>Married</h3>
    <p data-testid="is-married">{isMarried?"Yes":"No"}</p>
    <button onClick={handleClick}>Follow</button>
  </div>;
};

export default UserCard;
