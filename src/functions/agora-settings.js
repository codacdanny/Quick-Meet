import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const appID = '1a786833f8634473ab816a73d20b49ff';
const token = null;

export const config = { mode: 'rtc', codec: 'vp8', appID: appID, token: token };

export const useClient = createClient(config);
export const useMicAndVideoTracks = createMicrophoneAndCameraTracks();
