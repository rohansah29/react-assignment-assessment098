import React from "react";

const UserInfo = ({email,password,confirmPassword,education,passingYear,birthDate,firstName,lastName,phoneNumber,fatherName,motherName,address}) => {
  return <div className="user_info">
    <h2>You are registered successfully!</h2>
    <p>Email: {email} </p>
    <p>Password: {password} </p>
    <p>Confirmed Password: {confirmPassword} </p>
    <p>Education: {education} </p>
    <p>Passing Year: {passingYear} </p>
    <p>Birth Date: {birthDate} </p>
    <p>First Name: {firstName} </p>
    <p>Last Name: {lastName} </p>
    <p>Phone Number: {phoneNumber} </p>
    <p>Father Name: {fatherName} </p>
    <p>Mother Name: {motherName} </p>
    <p>Address: {address}</p>
  </div>;
};

export default UserInfo;
