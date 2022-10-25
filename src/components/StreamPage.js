import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import JoinRoom from './JoinRoom';
import VideoCall from './VideoCall';

const StreamPage = () => {
  const [inCall, setIncall] = useState(false);
  const [channelName, setChannelName] = useState('');

  return (
    <Box h="100%">
      {inCall && channelName ? (
        <VideoCall setIncall={setIncall} channelName={channelName} />
      ) : (
        <JoinRoom
          setIncall={setIncall}
          setChannelName={setChannelName}
          channelName={channelName}
        />
      )}
    </Box>
  );
};

export default StreamPage;
