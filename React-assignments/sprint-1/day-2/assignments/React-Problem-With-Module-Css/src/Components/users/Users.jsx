// This users list will be included in boilerplate;
import UserCard from "./UserCard"
import style from "../users/Users.module.css"
const usersList = [
  {
    id: 1,
    name: "Chrisse",
    address: "4018 Sachs Trail",
    avatar: "https://placehold.co/200",
    posts: 1841,
    followers: 66868,
    isMarried: true,
  },
  {
    id: 2,
    name: "Chandler",
    address: "15 Yemem road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
];

const Users = () => {
  return (
    <div className={style.container} data-testid="users">
      {/* Add h3 tag here as per the problem statement*/
      <h3 className={style.heading}>users List</h3>
      }

      {/* show users details here with the help of UserCard component here */
      usersList.map((el)=>(
        <UserCard id={el.id} name={el.name} address={el.address} avatar={el.avatar} posts={el.posts} followers={el.followers} isMarried={el.isMarried} />
      ))
      }
    </div>
  );
};

export default Users;
