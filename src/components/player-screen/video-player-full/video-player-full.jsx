import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayerFull = ({videoLink, previewImage}) => {
  return (
    <video src={videoLink} className="player__video" poster={previewImage}></video>
  );
};

VideoPlayerFull.propTypes = {
  videoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default VideoPlayerFull;
