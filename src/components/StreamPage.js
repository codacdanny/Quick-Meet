import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import JoinRoom from './JoinRoom';
import VideoCall from './VideoCall';
// import init from '../functions/init';

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

    // <Grid id="videos" display="grid" templateColumns="repeat(2, 1fr)" gap="5">
    //   <video
    //     ref={myVideo}
    //     className="video-player"
    //     id="user-1"
    //     autoPlay
    //     playsInline
    //   ></video>
    //   <video
    //     ref={userVideo}
    //     className="video-player"
    //     id="user-2"
    //     autoPlay
    //     playsInline
    //   ></video>
    // </Grid>
  );
};

export default StreamPage;
