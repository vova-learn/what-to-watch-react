import React from 'react';
import PropTypes from 'prop-types';
import {getRuntime, getProgressLineCount} from '../../../utils';

const MAX_PROGRESS_COUNT = 100;

const VideoPlayerControls = (props) => {
  const {
    nameFilm,
    videoTime,
    isReverse,
    isPlaying,
    handlerPlayerTimeClick,
    handlerPlayClick,
    handlerFullScreenClick,
  } = props;

  const runtime = getRuntime(videoTime.progress, videoTime.duration, isReverse);
  const runtimeCount = getProgressLineCount(videoTime.progress, videoTime.duration, MAX_PROGRESS_COUNT);

  const playVariationButtonJsx = isPlaying ? (
    <>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </>) : (
    <>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </>);


  return (
    <div className="player__controls">

      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={runtimeCount} max={MAX_PROGRESS_COUNT}></progress>
          <div className="player__toggler" style={{left: `${runtimeCount}%`}}>Toggler</div>
        </div>
        <div className="player__time-value" style={{cursor: `pointer`}} onClick={handlerPlayerTimeClick}>{runtime}</div>
      </div>

      <div className="player__controls-row">

        <button type="button" className="player__play" onClick={handlerPlayClick}>
          {playVariationButtonJsx}
        </button>
        <div className="player__name">{nameFilm}</div>

        <button type="button" className="player__full-screen" onClick={handlerFullScreenClick}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>

      </div>
    </div>
  );
};

VideoPlayerControls.propTypes = {
  nameFilm: PropTypes.string.isRequired,
  videoTime: PropTypes.shape({
    progress: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  isReverse: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handlerPlayerTimeClick: PropTypes.func.isRequired,
  handlerPlayClick: PropTypes.func.isRequired,
  handlerFullScreenClick: PropTypes.func.isRequired,
};

export default VideoPlayerControls;
