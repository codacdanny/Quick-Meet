import React from 'react';
import { ChakraProvider, Box, Heading, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Routes } from 'react-router-dom';
import StreamPage from './components/StreamPage';
import theme from './theme';
import ScreenShare from './components/ScreenShare';

function App() {
  return (
    // <InitContextProvider>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex
          p={3}
          alignItems="center"
          justifyContent="space-between"
          mb={6}
          borderBottom="1px solid"
          borderColor="teal.200"
        >
          <Heading as="h1" color="teal.600" justifySelf="flex-start">
            Quick Meet
          </Heading>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Routes>
          <Route path="/sharePage" element={<ScreenShare />} />
        </Routes>
        <StreamPage />
      </Box>
    </ChakraProvider>
    // </InitContextProvider>
  );
}

export default App;
