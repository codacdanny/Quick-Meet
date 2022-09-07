import React from 'react';
import { useClient, useScreenShare } from '../functions/agora-settings';

const ScreenShare = () => {
  const client = useClient();
  const { ready, tracks } = useScreenShare();
  console.log(tracks);
  return <div>ScreenShare</div>;
};

export default ScreenShare;
