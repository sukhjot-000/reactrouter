import React from 'react';
import { useLocation } from 'react-router-dom';

function Test5() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const var1 = searchParams.get('var1');
  const var2 = searchParams.get('var2');

  return (
    <div>
      <h1>Test 5</h1>
      <p>Value of var1: {var1}</p>
      <p>Value of var2: {var2}</p>
    </div>
  );
}

export default Test5;
// http://localhost:3000/test5?var1=ab&var2=cd