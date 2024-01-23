import React from "react";

const StepThree = ({step,setStep,handleChange}) => {
  return <div>
    <label>First Name</label>
    <input data-cy="firstName" type="text" name="firstName" onChange={handleChange} />
    <br />
    <label>Last Name</label>
    <input data-cy="lastName" type="text" name="lastName" onChange={handleChange} />
    <br />
    <label>Phone Number</label>
    <input data-cy="phone" type="tel" name="phoneNumber" onChange={handleChange} />
    <br />
    <button data-cy='previous' type="button" onClick={()=>setStep(step-1)}>Previous</button>
    <button data-cy='next' type="button" onClick={()=>setStep(step+1)}>Next</button>
  </div>;
};

export default StepThree;
