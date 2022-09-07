import {
  // Box,
  // Center,
  // Flex,
  // Grid,
  // GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { AgoraVideoPlayer } from 'agora-rtc-react';
// import { useState } from 'react';
const Video = ({ tracks, users }) => {
  // useEffect(() => {
  //   // setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  //   setGridSpacing((users.length + 1) % 4);
  // }, [users, tracks]);

  const windowWidth = window.innerWidth;
  return (
    <SimpleGrid
      // minChildWidth="45%"
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

      {/* {users.length > 1 &&
        users.map(user => {
          if (user.videoTrack) {
            return (
              <AgoraVideoPlayer
                videoTrack={user.videoTrack}
                key={user.uid}
                style={{ height: '45%', width: '45%' }}
              />
            );
          } else return null;
        })} */}
    </SimpleGrid>

    // <Grid>
    //   <GridItem colSpan={gridSpacing} h="100%" w="70%">
    //     <AgoraVideoPlayer videoTrack={tracks[1]} />
    //   </GridItem>
    //   {users.length > 0 &&
    //     users.map(user => {
    //       if (user.videoTrack) {
    //         return (
    //           <GridItem colSpan={gridSpacing} height="100%" width="500px">
    //             <AgoraVideoPlayer videoTrack={user.videoTrack} key={user.uid} />
    //           </GridItem>
    //         );
    //       } else return null;
    //     })}
    // </Grid>

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
