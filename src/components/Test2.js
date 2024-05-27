import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Test2() {
  const params = useParams();
  const varValue = params.var;
  const navigate=useNavigate();

  const goToTest3=()=>{
    // navigate('Test3')
    navigate('/Test3')
  }
  return (
    <div>
      <h1>Test 2</h1>
      <p>Value of var: {varValue}</p>
        <p onClick={goToTest3}>Go to Test 3</p>
    </div>
  );
}

export default Test2;
// http://localhost:3000/test2/hf