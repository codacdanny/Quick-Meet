import { Box, Center, Flex, Grid, GridItem } from '@chakra-ui/react';
import { AgoraVideoPlayer } from 'agora-rtc-react';
import { useEffect, useState } from 'react';
const Video = ({ tracks, users }) => {
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  return (
    <Grid>
      <GridItem colSpan={gridSpacing} h="100%" w="70%">
        <AgoraVideoPlayer videoTrack={tracks[1]} />
      </GridItem>
      {users.length > 0 &&
        users.map(user => {
          if (user.videoTrack) {
            return (
              <GridItem colSpan={gridSpacing} height="100%" width="500px">
                <AgoraVideoPlayer videoTrack={user.videoTrack} key={user.uid} />
              </GridItem>
            );
          } else return null;
        })}
    </Grid>
    // <Box h="100%">
    //   <Center>
    //     <Grid h="100%" w="70%">
    //       <AgoraVideoPlayer videoTrack={tracks[1]} className="video-player" />
    //     </Grid>
    //   </Center>

    //   {users.length > 0 &&
    //     users.map(user => {
    //       if (user.videoTrack) {
    //         <Flex flexDir={{ base: 'column', lg: 'row' }}>
    //           <Grid width="100px" height="30%">
    //             <AgoraVideoPlayer videoTrack={tracks[1]} />
    //           </Grid>
    //           ;
    //         </Flex>;
    //       }
    //       return null;
    //     })}
    // </Box>
  );
};

export default Video;
