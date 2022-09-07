import {
  createClient,
  createMicrophoneAndCameraTracks,
  createScreenVideoTrack,
} from 'agora-rtc-react';

const appID = process.env.REACT_APP_AGORA_APP_ID;
const token = null;

export const config = {
  mode: 'rtc',
  codec: 'vp8',
  appID: appID,
  token: token,
};

export const useClient = createClient(config);

export const useMicAndVideoTracks = createMicrophoneAndCameraTracks();
export const useScreenShare = createScreenVideoTrack();
