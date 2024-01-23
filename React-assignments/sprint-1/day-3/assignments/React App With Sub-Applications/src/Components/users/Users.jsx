import { useState } from "react";
import Button from "../common/button/Button";
import Container from "../common/container/Container";
import UserCard from "./UserCard";

// This users list; You should not modify this;
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
    address: "15 Yemen road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
  {
    id: 3,
    name: "Lottie",
    address: "564 Messerschmidt Court",
    avatar: "https://placehold.co/200",
    posts: 1900,
    followers: 23658,
    isMarried: true,
  },
  {
    id: 4,
    name: "Gray",
    address: "50 Schiller Point",
    avatar: "https://placehold.co/200",
    posts: 875,
    followers: 52900,
    isMarried: true,
  },
  {
    id: 5,
    name: "Clemens",
    address: "67556 Nevada Center",
    avatar: "https://placehold.co/200",
    posts: 1800,
    followers: 31529,
    isMarried: true,
  },
];

function Users() {
  const[data,setData]=useState(usersList);
  // const [reset,setReset]=useState(usersList);
  const handleAsc=()=>{
    const asc=data.sort((a, b) => a.followers - b.followers);
    setData(asc);
    console.log(data);
  }

  const handleDesc=()=>{
    const desc=data.sort((a, b) => b.followers - a.followers);
    setData(desc);
    console.log(data);
  }

  const handleReset=()=>{
    setData(usersList);
    console.log(data);
  }

  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Users List</h1>
      <div data-testid="users-app-buttons">
        <h3>Sort By their number of followers</h3>
        {/* create 3 buttons here with the help of `Button` component as mentioned in the problem statement */}
        <Button text="Sort by asc" onClick={handleAsc}/>
        <Button text="Sort by desc" onClick={handleDesc}/>
        <Button text="Reset" onClick={handleReset}/>
      </div>
      {/* show all users details here with the help of UserCard component here */
      data.map((el)=>(
        <UserCard key={el.id} id={el.id} name={el.name} address={el.address} avatar={el.avatar} posts={el.posts} followers={el.followers} isMarried={el.isMarried} />
      ))
      }
    </Container>
  );
}

export default Users;
