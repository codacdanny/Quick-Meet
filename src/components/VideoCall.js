import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import {
  config,
  useClient,
  useMicAndVideoTracks,
} from '../functions/agora-settings';
import { initContext } from '../functions/initContext';
import Controls from './Controls';
import Video from './Video';

const VideoCall = ({ setIncall, channelName }) => {
  const client = useClient();
  const { ready, tracks } = useMicAndVideoTracks();
  const [start, setStart] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let init = async name => {
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === 'video') {
          setUsers(previousUsers => {
            return [...previousUsers, user];
          });
        }

        if (mediaType === 'audio') {
          user.audioTrack.play();
        }
      });

      client.on('user-unpublished', (user, mediaType) => {
        if (mediaType === 'video') {
          setUsers(previousUsers => {
            return previousUsers.filter(eachUser => eachUser.uid !== user.uid);
          });
        }

        if (mediaType === 'audio') {
          if (user.audioTrack) {
            user.audioTrack.stop();
          }
        }
      });

      client.on('user-left', user => {
        setUsers(previousUsers => {
          return previousUsers.filter(eachUser => eachUser.uid !== user.uid);
        });
      });

      try {
        await client.join(config.appID, name, config.token, null);
      } catch (error) {
        console.error(error);
      }

      if (tracks) {
        await client.publish([tracks[0], tracks[1]]);
        setStart(true);
      }
    };
    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [channelName, client, ready, tracks]);

  return (
    <Box h="100%">
      <Box h="100%">
        {start && tracks && <Video tracks={tracks} users={users} />}
      </Box>

      <Box>
        {ready && tracks && (
          <Controls tracks={tracks} setStart={setStart} setIncall={setIncall} />
        )}
      </Box>
    </Box>
  );
};

export default VideoCall;
