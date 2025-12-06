import React, { FC, useEffect, useState } from 'react';

export interface ITestedComponent {
  text: string;
}

const TestedComponent: FC<ITestedComponent> = ({ text }) => {
  const [count, setCount] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('this is one 1');
  }, []);
  console.log('this is TWO 2');

  const onChanges = event => {
    alert('qweqwe');
    console.log('EVEnt', event);
    setValue(event.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <div style={{ height: '200px', backgroundColor: 'grey' }}>
        <span>{text}</span>
        <input
          style={{ backgroundColor: 'white' }}
          type="text"
          value={value}
          onChange={onChanges}
          placeholder="enter your data"
        ></input>
      </div>
      <button onClick={handleClick}>Count: {count}</button>;
    </>
  );
};

export default TestedComponent;
