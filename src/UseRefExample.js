import { useState, useRef } from 'react';

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const useRefThingy = useRef(5);

  const checkInfo = useRef(null);

  let withoutUseRef = 5;

  console.log('component rerenders so this code runs again');

  const handleRerenderClick = () => {
    setCount((argument) => argument + 1);
  };

  const handleRerenderUseRefClick = () => {
    useRefThingy.current = useRefThingy.current + 1;
  };

  const handleRef = () => {
    console.log('checkInfobutton', checkInfo.current);
    checkInfo.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      {count}
      <h1>Variable without useRef: {withoutUseRef}</h1>
      <p>This changed when rendered.</p>
      <button
        onClick={() => {
          withoutUseRef++;
          console.log('withoutUseRef: ', withoutUseRef);
        }}
      >
        Increase +
      </button>
      <br />
      <p>when state changes, page gets rendered again.</p>
      <button onClick={handleRerenderClick}>Rerender</button>
      <br /> <br /> <br /> <br /> <br />
      <h1>Value stored inside my reference: {useRefThingy.current}</h1>
      <button onClick={handleRerenderUseRefClick}>Increase with useRef+</button>
      <br />
      <button
        ref={checkInfo}
        onClick={handleRef}
        style={{ backgroundColor: 'pink' }}
      >
        TESTING
      </button>
    </div>
  );
};

export default UseRefExample;
