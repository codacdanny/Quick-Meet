import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const appID = process.env.REACT_APP_AGORA_APP_ID;
console.log(appID);
const token = null;

export const config = {
  mode: 'rtc',
  codec: 'vp8',
  appID: appID,
  token: token,
};
console.log(config.appID);

export const useClient = createClient(config);

export const useMicAndVideoTracks = createMicrophoneAndCameraTracks();
