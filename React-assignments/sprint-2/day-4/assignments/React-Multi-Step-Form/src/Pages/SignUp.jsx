import React, { useState } from "react";
import StepOne from "../Components/SignUp/StepOne";
import StepTwo from "../Components/SignUp/StepTwo";
import StepThree from "../Components/SignUp/StepThree";
import StepFour from "../Components/SignUp/StepFour";
import UserInfo from "../Components/SignUp/UserInfo";

const initialState={
  "email":"",
  "password":"",
  "confirmPassword":"",
  "education":"B.Tech",
  "passingYear":"",
  "birthDate":"",
  "firstName":"",
  "lastName":"",
  "phoneNumber":"",
  "fatherName":"",
  "motherName":"",
  "address":""
}

const SignUp = () => {
  const [step,setStep]=useState(1);
  const [formData, setFormData] = useState(initialState);
  const [showData,setShowData]=useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return <div>{/* create form and render component according to steps */}
  {showData?<form onSubmit={(e) => {e.preventDefault();setShowData(false);console.log(formData);}}>
    <h2 data-cy="current-step">Step: {step}</h2>
    {step==1?<StepOne step={step} setStep={setStep} handleChange={handleChange}/>:null}
    {step==2?<StepTwo step={step} setStep={setStep} handleChange={handleChange}/>:null}
    {step==3?<StepThree step={step} setStep={setStep} handleChange={handleChange}/>:null}
    {step==4?<StepFour step={step} setStep={setStep} handleChange={handleChange}/>:null}
    
  </form>:<UserInfo {...formData}/>}
  </div>;
};

export default SignUp;
