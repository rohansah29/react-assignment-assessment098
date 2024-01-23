import React, { useState } from "react";
import "./Form.css";
import ShowFormData from "./ShowFormData";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phNumber: "",
  country: "",
  birthDate: "",
  avatar: "",
  marriageStatus: false,
  gender: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [showData,setShowData]=useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
  return (
    <div>
      <div>
        <h1>React Form Assignment</h1>
        <form onSubmit={(e) => {e.preventDefault();setShowData(true);console.log(formData);}}>
          {/* First Name */}
          <label htmlFor="">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          <br />
          {/* Last Name */}
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          <br />
          {/* Email */}
          <label htmlFor="">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <br />
          {/* Password */}
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <br />
          {/* Phone number */}
          <label htmlFor="">Phone number</label>
          <input type="number" name="phNumber" value={formData.phNumber} onChange={handleChange} />
          <br />
          {/* Country Select Tage */}
          <label htmlFor="">Country</label>
          <select name="country" id="" value={formData.country} onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Russia">Russia</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
          </select>
          <br />
          {/* Birth Date Selector */}
          <label for="birthday">Birth Date:</label>
          <input type="date" id="birthday" name="birthDate" value={formData.birthDate} onChange={handleChange}/>
          <br />
          {/* Profile Pic Selector */}
          <label htmlFor="">Choose Avatar</label>
          <input type="file" id="img" name="avatar" accept="image/*" value={formData.avatar} onChange={handleChange}/>
          <br />
          {/* Married Status Selector */}
          <label htmlFor="">Select if Married</label>
          <input type="checkbox" name="marriageStatus" value={formData.marriageStatus} onChange={handleChange} />
          <span>Marriage Status</span>
          <br />
          {/* Gender Selector */}
          <label htmlFor="">Choose gender</label>
          <input type="radio" name="gender" value="male" onChange={handleChange}/>
          <span>Male</span>&nbsp;
          <input type="radio" name="gender" value="female" onChange={handleChange}/>
          <span>Female</span>&nbsp;
          <input type="radio" name="gender" value="other" onChange={handleChange}/>
          <span>Other</span>&nbsp;
          <br />
          {/* Submit Button - input type submit */}
          <input type="Submit" />
        </form>
        {/* if form submitted then show ShowFormData component here */
        showData?<ShowFormData {...formData}/>:null
        }
      </div>
    </div>
  );
};

export default Form;
