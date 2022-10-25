import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useClient } from '../functions/agora-settings';
import { AiFillAudio } from 'react-icons/ai';
import { FaPhoneSlash } from 'react-icons/fa';
import { BiMicrophoneOff, BiVideoOff, BiVideo } from 'react-icons/bi';

const Controls = ({ tracks, setStart, setIncall }) => {
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const client = useClient();

  const [audioButton, setAudioButton] = useState(trackState.audio);
  const [videoButton, setVideoButton] = useState(trackState.video);

  const mute = async mediaType => {
    if (mediaType === 'audio') {
      await tracks[0].setEnabled(!trackState.audio);
      setAudioButton(!trackState.audio);
      setTrackState(previousUsers => {
        return { ...previousUsers, audio: !previousUsers.audio };
      });
    } else if (mediaType === 'video') {
      await tracks[1].setEnabled(!trackState.video);
      setVideoButton(!trackState.video);
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
    <Flex width={{ base: '70%', lg: '30%' }}>
      <ButtonGroup display="flex" justifyContent="space-around" width="100%">
        <Button
          onClick={() => mute('audio')}
          colorScheme="teal"
          fontSize={{ base: '20px', bigger: '24px', lg: '30px' }}
        >
          {audioButton ? <AiFillAudio /> : <BiMicrophoneOff />}
        </Button>
        <Button
          onClick={() => mute('video')}
          colorScheme="teal"
          fontSize={{ base: '20px', bigger: '24px', lg: '30px' }}
        >
          {videoButton ? <BiVideo /> : <BiVideoOff />}
        </Button>
        <Button
          onClick={leaveChannel}
          colorScheme="red"
          fontSize={{ base: '20px', bigger: '24px', lg: '30px' }}
        >
          {' '}
          <FaPhoneSlash />{' '}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Controls;
