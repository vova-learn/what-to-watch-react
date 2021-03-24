import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';

const TIMEOUT_M_SECONDS = 1000;
let timer = null;

const VideoPlayerMini = (props) => {
  const {isPlaying, film, muted, width, height} = props;
  const {previewVideoLink, previewImage} = film;
  const videoRef = createRef();

  useEffect(() => {

    if (isPlaying) {
      timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, TIMEOUT_M_SECONDS);
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
      muted={muted}
      width={width}
      height={height}
    />
  );
};

VideoPlayerMini.defaultProp = {
  muted: true,
  width: 280,
  height: 175,
};

VideoPlayerMini.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  film: PropTypes.shape(propFilm).isRequired,
  muted: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default VideoPlayerMini;
