import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
// import svg from '../images/conference.svg';
import svg2 from '../images/5.svg';
import React, { useState } from 'react';
import { useClipboard } from '@chakra-ui/react';

let random;
const JoinRoom = ({ setIncall, setChannelName, channelName }) => {
  const toast = useToast();
  //eslint-disable-next-line
  const [roomCheck, setRoomCheck] = useState(undefined);

  const [value, setValue] = useState('');
  const { hasCopied, onCopy } = useClipboard(value);

  function joinRoom() {
    if (channelName !== '') {
      setIncall(true);
    } else {
      setRoomCheck('');
      toast({
        position: 'top',

        title: 'Error',
        description: 'Please Create/Join a room',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  // function toCopy() {
  //   setValue(random);
  //   onCopy();
  // }

  const genRand = () => {
    random = Math.random()
      .toString(36)
      .substring(2, 10 + 2);
    setChannelName(random);
    setValue(random);
    console.log(channelName);
    return random;
  };

  return (
    <Flex flexDir="column" alignItems="center" mt={7} width="100%">
      <Flex gap={2} flexDir={{ base: 'column', bigger: 'row' }} width="80%">
        <Box m="auto 0" width={{ bigger: '60%' }}>
          <Button
            colorScheme="teal"
            width={{ base: '80%', bigger: 'auto' }}
            onClick={genRand}
            // mr={{ base: '0', bigger: '4' }}
          >
            Create Room ID
          </Button>
        </Box>

        <Flex
          my={5}
          width="100%"
          borderBottom={3}
          borderBottomColor="cyan.700"
          borderStyle="solid"
          justifyContent="space-between"
        >
          <Text size="lg">{random}</Text>
          {random && (
            <Button onClick={onCopy} ml={2}>
              {hasCopied ? 'Copied' : 'Copy'}
            </Button>
          )}
        </Flex>
        {/* <Input
          placeholder="Click to generate ID"
          // onChange={e => setChannelName(e.target.value)}
          variant="filled"
          size="lg"
          my={5}
          value={random}
        /> */}
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
        <Button colorScheme="teal" onClick={joinRoom}>
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
