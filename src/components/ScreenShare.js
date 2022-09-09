// import { Button } from '@chakra-ui/react';
// import React, { useEffect, useState } from 'react';
// import { useClient, useScreenShare } from '../functions/agora-settings';
// import { MdScreenShare, MdStopScreenShare } from 'react-icons/md';

// const ScreenShare = () => {
//   const [start, setStart] = useState(false);
//   const client = useClient();
//   const { ready, tracks } = useScreenShare();
//   console.log('the tracks:', tracks, 'is ready:', ready, 'the client:', client);

//   const screenShareInit = async () => {
//     // client.on('user-published', async (user)=> {
//     //   await client.subscribe(user, user)
//     // })

//     // client.on('user-unpublished', (user)=> {
//     //   user
//     // })
//     setStart(true);
//     if (tracks && start) {
//       await client.publish([tracks[1]]);
//     }
//     if (start === false) {
//       await client.unpublish([tracks[1]]);
//     }
//   };

//   // if (ready && tracks && start) {
//   //   screenShareInit();
//   // }
//   //return () => {
//   //   second
//   // }

//   return (
//     <Button onClick={() => screenShareInit()}>
//       {start ? <MdStopScreenShare /> : <MdScreenShare />}
//     </Button>
//   );
// };

// export default ScreenShare;
