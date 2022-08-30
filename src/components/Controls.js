import { Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useClient } from '../functions/agora-settings';

const Controls = ({ tracks, setStart, setIncall }) => {
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const client = useClient();

  const mute = async mediaType => {
    if (mediaType === 'audio') {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState(previousUsers => {
        return { ...previousUsers, audio: !previousUsers.audio };
      });
    } else if (mediaType === 'video') {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState(previousUsers => {
        return { ...previousUsers, video: !previousUsers.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setIncall(false);
  };

  return (
    <Flex>
      <Button onClick={() => mute('audio')}> mute Audio</Button>
      <Button onClick={() => mute('video')}> mute video</Button>
      <Button onClick={leaveChannel}> leave</Button>
    </Flex>
  );
};

export default Controls;
