import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
// import svg from '../images/conference.svg';
import svg1 from '../images/4.svg';
import svg2 from '../images/5.svg';
import React from 'react';

const JoinRoom = ({ setIncall, setChannelName }) => {
  return (
    <Flex flexDir="column" alignItems="center" mt={7} width="100%">
      <Flex gap={2} flexDir={{ base: 'column', bigger: 'row' }} width="inherit">
        <Box m="auto 0">
          <Button
            colorScheme="teal"
            width={{ base: '80%', bigger: '100%' }}
            // mr={{ base: '0', bigger: '4' }}
            p="0"
          >
            Create Room ID
          </Button>
        </Box>

        <Input
          placeholder="Enter Name"
          onChange={e => setChannelName(e.target.value)}
          variant="filled"
          size="lg"
          my={5}
          width="90%"
        />
      </Flex>
      <Text my={4}>OR</Text>
      <Flex
        gap={2}
        flexDir={{ base: 'column', bigger: 'row' }}
        mt={{ base: '3', bigger: '0' }}
      >
        <Text colorScheme="teal" w="80%" m="auto 0">
          {' '}
          Join with Link:
        </Text>

        <Input
          placeholder="Enter Link"
          onChange={e => setChannelName(e.target.value)}
          variant="filled"
          size="lg"
          my={5}
        />
      </Flex>
      <Box>
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
