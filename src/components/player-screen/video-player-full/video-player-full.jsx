import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayerFull = ({videoLink, previewImage, isPlaying, isFullScreen, onPlaying, onFullScreen, onVideoTime}) => {
  const refVideo = createRef();

  const handleVideoTimeupdate = (evt) => {
    onVideoTime({
      progress: Math.floor(evt.target.currentTime),
      duration: Math.round(evt.target.duration),
    });
  };

  const handleVidePlaying = () => {
    // следим за play в fullscreen
    onPlaying(true);
  };

  const handleVidePause = () => {
    // следим за pause в fullscreen
    onPlaying(false);
  };

  useEffect(() => {
    const video = refVideo.current;

    if (isPlaying) {
      video.play();
      video.addEventListener(`timeupdate`, handleVideoTimeupdate);

      // TODO: unmuted width autoplay
      // video.addEventListener(`playing`, (event) => {
      //   event.target.muted = false;
      // });

      // TODO: save video progress
      // const throttling = video.currentTime - `current time from state`;
      // video.currentTime = `current time from state` + ~throttling;
    }

    if (!isPlaying) {
      video.pause();
    }

    if (isFullScreen) {
      video.requestFullscreen();
      // сразу сбрасываем fullscreen
      onFullScreen(false);

      video.addEventListener(`playing`, handleVidePlaying);
      video.addEventListener(`pause`, handleVidePause);
    }


    return () => {
      video.removeEventListener(`timeupdate`, handleVideoTimeupdate);
    };
  }, [isPlaying, isFullScreen]);

  return (
    <video
      ref={refVideo}
      src={videoLink}
      className="player__video"
      poster={previewImage}
      autoPlay={true}
      muted={true}
    ></video>
  );
};

VideoPlayerFull.propTypes = {
  videoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  onPlaying: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  onVideoTime: PropTypes.func.isRequired,
};

export default VideoPlayerFull;
