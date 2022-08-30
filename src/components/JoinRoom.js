import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
// import svg from '../images/conference.svg';
import svg2 from '../images/5.svg';
import React from 'react';

const JoinRoom = ({ setIncall, setChannelName }) => {
  return (
    <Flex flexDir="column" alignItems="center" mt={7} width="100%">
      <Flex gap={2} flexDir={{ base: 'column', bigger: 'row' }} width="80%">
        <Box m="auto 0" width={{ bigger: '60%' }}>
          <Button
            colorScheme="teal"
            width={{ base: '80%', bigger: 'auto' }}
            // mr={{ base: '0', bigger: '4' }}
          >
            Create Room ID
          </Button>
        </Box>

        <Input
          placeholder="Click to generate ID"
          onChange={e => setChannelName(e.target.value)}
          variant="filled"
          size="lg"
          my={5}
        />
      </Flex>
      <Text my={4}>OR</Text>
      <Flex
        gap={2}
        flexDir={{ base: 'column', bigger: 'row' }}
        mt={{ base: '3', bigger: '0' }}
        width="80%"
      >
        <Box m="auto 0" width={{ bigger: '60%' }}>
          <Text colorScheme="teal">Join with ID</Text>
        </Box>
        <Input
          placeholder="Enter Room ID"
          onChange={e => setChannelName(e.target.value)}
          variant="filled"
          size="lg"
          my={5}
        />
      </Flex>
      <Box my="8">
        <Button colorScheme="teal" onClick={() => setIncall(true)}>
          Join Room
        </Button>
      </Box>
      <Box m={12}>
        <Image src={svg2} alt="conference" />
      </Box>
    </Flex>
  );
};

export default JoinRoom;
