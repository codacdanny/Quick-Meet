import { SimpleGrid } from '@chakra-ui/react';
import { AgoraVideoPlayer } from 'agora-rtc-react';

const Video = ({ tracks, users }) => {
  const windowWidth = window.innerWidth;
  return (
    <SimpleGrid
      columns={
        users.length <= 1 && windowWidth < 700
          ? 1
          : users.length === 0 && windowWidth > 700
          ? 1
          : 2
      }
      row={users.length % 2 === 0 ? users.length / 2 : (users.length + 1) / 2}
      spacing={1.5}
      height="100vh"
      width="100%"
      margin="0 auto"
      overflowY="scroll"
    >
      <AgoraVideoPlayer videoTrack={tracks[1]} style={{ height: '100%' }} />

      {users.length > 0 &&
        users.length < 2 &&
        users.map(user => {
          if (user.videoTrack) {
            return (
              <AgoraVideoPlayer videoTrack={user.videoTrack} key={user.uid} />
            );
          } else return null;
        })}
      {users.length >= 2 &&
        users.map(user => {
          if (user.videoTrack) {
            return (
              <AgoraVideoPlayer
                videoTrack={user.videoTrack}
                key={user.uid}
                style={{ minHeight: '48vh' }}
              />
            );
          } else return null;
        })}
    </SimpleGrid>
  );
};

export default Video;
