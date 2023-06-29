import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useClient } from '../functions/agora-settings';
import { AiFillAudio } from 'react-icons/ai';
import { FaPhoneSlash } from 'react-icons/fa';
//import { TbScreenShareOff, TbScreenShare } from 'react-icons/tb';
import { TbScreenShareOff, TbScreenShare } from 'react-icons/tb';
import { BiMicrophoneOff, BiVideoOff, BiVideo } from 'react-icons/bi';

const Controls = ({ tracks, setStart, setIncall }) => {
  const [trackState, setTrackState] = useState({
    video: true,
    audio: true,
    screenShare: false,
  });
  const client = useClient();

  const [audioButton, setAudioButton] = useState(trackState.audio);
  const [videoButton, setVideoButton] = useState(trackState.video);
  const [screenShareButton, setScreenShareButton] = useState(
    trackState.screenShare
  );

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

  const toggleScreenShare = async () => {
    if (!trackState.screenShare) {
      // Start screen sharing
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const screenTrack = stream.getVideoTracks()[0];
      tracks.push(screenTrack);
      setScreenShareButton(true);
      setTrackState(previousUsers => {
        return { ...previousUsers, screenShare: true };
      });
    } else {
      // Stop screen sharing
      const screenTrack = tracks.find(track => track.kind === 'video');
      const screenTrackIndex = tracks.indexOf(screenTrack);
      tracks.splice(screenTrackIndex, 1);
      screenTrack.stop();
      setScreenShareButton(false);
      setTrackState(previousUsers => {
        return { ...previousUsers, screenShare: false };
      });
    }
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
          onClick={toggleScreenShare}
          colorScheme={screenShareButton ? 'green' : 'gray'}
          fontSize={{ base: '20px', bigger: '24px', lg: '30px' }}
        >
          {screenShareButton ? <TbScreenShareOff /> : <TbScreenShare />}
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
