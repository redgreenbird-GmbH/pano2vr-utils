function ToggleMediaPlayback(mediaID) {
  console.log(`ToggleMediaPlayback ${mediaID}`);
  if (pano.isPlaying(mediaID)) pano.pauseSound(mediaID);
  else pano.playSound(mediaID);
}

function PlayMedia(mediaID) {
  if (!pano.isPlaying(mediaID)) pano.playSound(mediaID);
}

function PlayStopMedia(mediaID) {
  if (!pano.isPlaying(mediaID)) pano.playSound(mediaID);
  else pano.stopSound(mediaID);
}

function StopMedia(mediaID) {
  pano.stopSound(mediaID);
}
