import React from "react";

const StepOne = ({step,setStep,handleChange}) => {
  return <div>
    <label>Email</label>
    <input data-cy="email" type="email" name="email" onChange={handleChange} />
    <br />
    <label>Password</label>
    <input data-cy="password" type="password" name="password" onChange={handleChange} />
    <br />
    <label>Confirm Password</label>
    <input data-cy="confirmedPassword" type="password" name="confirmPassword" onChange={handleChange} />
    <br />
    {/* <input data-cy='next' type="button" value="Next" onClick={()=>setStep(step+1)} /> */}
    <button data-cy='next' type="button" onClick={()=>setStep(step+1)}>Next</button>
  </div>;
};

export default StepOne;
