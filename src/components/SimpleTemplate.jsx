import React, { useState, useEffect } from 'react';

const SimpleTemplate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count is now:', count);
  }, [count]);

  return (
    <div style={{ padding: '40px', textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ color: '#6b46ff' }}>Counter: {count}</h1>
      
      <button 
        onClick={() => setCount(count - 1)}
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#6b46ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        - Decrease
      </button>

      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#6b46ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        + Increase
      </button>

      <button 
        onClick={() => setCount(0)}
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
};

export default SimpleTemplate;
