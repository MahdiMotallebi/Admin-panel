import React from 'react';

//Mui
import { Box } from '@mui/material';
import { JsxElement } from 'typescript';

type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <Box
      sx={{
        padding: '0 1.5rem'
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
