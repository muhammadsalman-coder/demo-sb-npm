import { Button, ButtonProps, Box } from '@mui/material';
import React from 'react';

export interface SalmanButtonProps {
  backgroundColor?: string;
  padding?: string;
  colors?: string;
  children?: any;
}

const SalmanButton = ({
  backgroundColor,
  colors = '#fff',
  padding,
  children,
  ...props
}: SalmanButtonProps & ButtonProps) => {
  return (
    <Box sx={{ '& button': { color: colors, fontWeight: 'bold' } }}>
      <Button
        {...props}
        sx={{
          backgroundColor,
          padding,
        }}
        variant="contained"
      >
        {children ? children : 'Salman Button'}
      </Button>
    </Box>
  );
};

export { SalmanButton };
