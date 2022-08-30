// import { createContext, useContext, useEffect, useRef } from 'react';

// export const initContext = createContext();

// export const InitContextProvider = ({ children }) => {
//   const myVideo = useRef(null);
//   const userVideo = useRef(null);
//   let peerConnection;
//   let remoteStream;
//   let offer;
//   let localStream;
//   const servers = {
//     iceServers: [
//       {
//         urls: [
//           'stun:stun1.l.google.com:19302',
//           'stun:stun2.l.google.com:19302',
//         ],
//       },
//     ],
//   };

//   useEffect(() => {
//     // navigator.mediaDevices
//     //   .getUserMedia({
//     //     video: true,
//     //     audio: false,
//     //   })
//     //   .then(currentStream => {
//     //     setStream(currentStream);
//     //     myVideo.current.srcObject = currentStream;
//     //   });
//     const init = async () => {
//       localStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: false,
//       });

//       myVideo.current.srcObject = localStream;
//     };
//     init();

//     // second user
//     let createOffer = async () => {
//       peerConnection = new RTCPeerConnection(servers);
//       remoteStream = new MediaStream();
//       userVideo.current.srcObject = remoteStream;

//       if (!localStream) {
//         localStream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: false,
//         });
//         myVideo.current.srcObject = localStream;
//       }

//       localStream.getTracks().forEach(track => {
//         peerConnection.addTrack(track, localStream);
//       });

//       peerConnection.ontrack = event => {
//         event.streams[0].getTracks().forEach(track => {
//           remoteStream.addTrack(track);
//         });
//       };
//       peerConnection.ontrack = event => {
//         event.streams[0].getTracks().forEach(track => {
//           remoteStream.addTrack(track);
//         });
//       };
//       peerConnection.onicecandidate = async event => {
//         // console.log(event);
//         if (event.candidate) {
//           console.log('icecandidate:', event.candidate);
//         }
//       };
//       offer = await peerConnection.createOffer();
//       await peerConnection.setLocalDescription(offer);
//     };

//     createOffer();
//   }, []);

//   return (
//     <initContext.Provider
//       value={{
//         myVideo,
//         userVideo,
//       }}
//     >
//       {children}
//     </initContext.Provider>
//   );
// };
// export function useInitContext() {
//   return useContext(initContext);
// }

// export default InitContextProvider;
