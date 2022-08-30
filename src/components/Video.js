import { Box } from '@chakra-ui/react';
import { AgoraVideoPlayer } from 'agora-rtc-react';
const Video = ({ tracks, users }) => {
  return (
    <Box h="100%">
      <Box h="100%">
        <AgoraVideoPlayer videoTrack={tracks[1]} className="video-player" />
      </Box>
      {users.length > 0 &&
        users.map(user => {
          if (user.videoTrack) {
            <Box h="100%" w="100vw">
              <AgoraVideoPlayer
                videoTrack={tracks[1]}
                className="video-player"
              />
            </Box>;
          }
          return null;
        })}
    </Box>
  );
};

export default Video;
