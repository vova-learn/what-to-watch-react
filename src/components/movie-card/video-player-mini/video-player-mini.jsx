import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';
import {CardSize} from '../../../const';

const TIMEOUT_SECONDS = 1;
let timer = null;

const VideoPlayerMini = ({film, isPlaying}) => {
  const {previewVideoLink, previewImage} = film;
  const videoRef = createRef();

  useEffect(() => {
    if (isPlaying) {
      timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, TIMEOUT_SECONDS * 1000);
      return;
    }

    clearTimeout(timer);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.src = videoRef.current.src;
  }, [isPlaying, previewVideoLink]);

  return (
    <video
      ref={videoRef}
      src={previewVideoLink}
      preload="auto"
      poster={previewImage}
      muted={true}
      width={CardSize.WIDTH}
      height={CardSize.HEIGHT}
    />
  );
};

VideoPlayerMini.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayerMini;
