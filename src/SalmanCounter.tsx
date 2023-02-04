import React from 'react';

export interface SalmanPropsInterface {
  yourName: string;
  onChange: (counter: number) => void;
}
export const SalmanCounter = ({ yourName, onChange }: SalmanPropsInterface) => {
  const [counter, setCounter] = React.useState<number>(0);
  React.useEffect(() => {
    onChange(counter);
  }, [counter]);
  return (
    <div>
      <h1>Hello! {yourName}</h1>
      <h2 style={{ textAlign: 'center', fontSize: '24px' }}>{counter}</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          style={{ flex: 1, padding: '5px', backgroundColor: 'cornflowerblue' }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          style={{ flex: 1, padding: '5px', backgroundColor: 'cornflowerblue' }}
        >
          Decrenment
        </button>
      </div>
    </div>
  );
};
