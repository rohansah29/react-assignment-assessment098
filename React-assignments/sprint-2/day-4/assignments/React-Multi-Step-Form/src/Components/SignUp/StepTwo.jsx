import React from "react";

const StepTwo = ({step,setStep,handleChange}) => {
  return <div>
    <label>Education</label>
    <select data-cy="education" name="education" onChange={handleChange}>
      <option value="B.Tech">B.Tech</option>
      <option value="Bsc">Bsc</option>
      <option value="B.A">B.A</option>
      <option value="BCA">BCA</option>
    </select>
    <br />
    <label>Passing Year</label>
    <input data-cy="passingYear" type="month" name="passingYear" onChange={handleChange} />
    <br />
    <label>Birth Date</label>
    <input data-cy="birthDate" type="date" name="birthDate" onChange={handleChange} />
    <br />
    <button data-cy='previous' type="button" onClick={()=>setStep(step-1)}>Previous</button>
    <button data-cy='next' type="button" onClick={()=>setStep(step+1)}>Next</button>
  </div>;
};

export default StepTwo;
