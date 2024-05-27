import React from 'react';
import { useParams } from 'react-router-dom';

function Test4() {
  const params = useParams();
  const var1 = params.var1;
  const var2 = params.var2;

  return (
    <div>
      <h1>Test4</h1>
      <p>Value of var1: {var1}</p>
      <p>Value of var2: {var2}</p>
    </div>
  );
}

export default Test4;
// http://localhost:3000/test4/ab/cd