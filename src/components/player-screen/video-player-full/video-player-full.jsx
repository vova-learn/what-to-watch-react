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
    }

    if (!isPlaying) {
      video.pause();
    }

    if (isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
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
      data-testid={`video`}
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
