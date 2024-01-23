import React from "react";

const StepFour = ({step,setStep,handleChange}) => {
  return <div>
    <label>Father Name</label>
    <input data-cy="fatherName" type="text" name="fatherName" onChange={handleChange} />
    <br />
    <label>Mother Name</label>
    <input data-cy="motherName" type="text" name="motherName" onChange={handleChange} />
    <br />
    <label>Address</label>
    <textarea data-cy="address" type="text" name="address" onChange={handleChange} />
    <br />
    <button data-cy='previous' type="button" onClick={()=>setStep(step-1)}>Previous</button>
    <input type="submit" />
  </div>;
};

export default StepFour;
