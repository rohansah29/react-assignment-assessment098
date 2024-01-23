// import module.css here;
const UserDetails = (props) => {
  console.log(props);
  return (
    <>
      <div data-testid="user-container">
        
        <img src={props.avatar} alt="" />
        <div>
          <div>
            <h3 data-testid="user-fname">{props.first_name}</h3>
            <h3 data-testid="user-lname">{props.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{props.address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{props.karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{props.followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{props.posts}</h3>
        </div>
        <button data-testid="follow-btn">{props.is_following?"Unfollow":"Follow"}</button>
      </div>
    </>
  );
};
export default UserDetails;
