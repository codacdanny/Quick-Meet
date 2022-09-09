import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { DiGithubBadge } from 'react-icons/di';
import StreamPage from './components/StreamPage';
import theme from './theme';

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
            <Link isExternal href="https://github.com/codacdanny/Quick-Meet">
              <Flex justify="center" alignItems="center">
                <Text> Quick Meet</Text>
                <DiGithubBadge />
              </Flex>
            </Link>
          </Heading>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>

        <StreamPage />
      </Box>
    </ChakraProvider>
    // </InitContextProvider>
  );
}

export default App;
