import React from 'react';
import tw, { styled } from 'twin.macro';
import Hello from './components/Hello';

export const Box = styled.div`
  ${tw`
    w-full 
    h-screen 
    bg-black 
    flex 
    justify-center
    items-center
    text-white
    text-2xl
  `}
`;

const App = () => {
  return (
    <Box>
      <Hello />
    </Box>
  );
};

export default App;
