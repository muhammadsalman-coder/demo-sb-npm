import { styled } from '@mui/material';
import React from 'react';

const MyInput = styled('input')({
  WebkitTransition: '1s',
  border: '1px solid darkgray',
  outline: 'none',
  transition: '1s',
  '&:hover': {
    color: 'black',
    boxShadow: '0 0 5pt 0.5pt #D3D3D3',
  },
  '&:focus': {
    boxShadow: '0 0 5pt 2pt #D3D3D3',
    outline: 'none',
  },
  '&:focus-visible': {
    borderColor: 'darkgray',
    marin: '2px',
    outline: 'none',
  },
});

export interface SalmanInputInterface
  extends React.HTMLAttributes<HTMLInputElement> {
  padding?: string;
  type: string;
  placeholder: string;
  borderRadius: string;
  width?: string;
}
const SalmanInput = ({
  padding,
  type,
  placeholder,
  borderRadius,
  width = '100%',
  ...props
}: SalmanInputInterface) => {
  return (
    <MyInput
      {...props}
      type={type}
      style={{ padding, borderRadius, width }}
      placeholder={placeholder}
    />
  );
};

export { SalmanInput };
