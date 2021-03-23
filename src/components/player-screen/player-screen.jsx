import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchFilm} from '../../store/api-actions';
import {ActionCreator} from '../../store/actions';
import {getRuntime} from '../../utils';

import VideoPlayerFull from './video-player-full/video-player-full';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const PlayerScreen = ({id, film, isLoadFilm, isLoadFilmFailed, onLoadFilm}) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLoadFilm) {
      onLoadFilm(id);
    }

    if (isLoadFilm && film.id === id) {
      ActionCreator.resetFilm();
    }
  }, [isLoadFilm]);

  if (!isLoadFilm && !isLoadFilmFailed) {
    return <LoadingScreen />;
  } if (!isLoadFilm && isLoadFilmFailed) {
    return <NotFoundScreen />;
  }

  const {name, previewImage, videoLink, runTime} = film;

  return (
    <div className="player">

      <VideoPlayerFull videoLink={videoLink} previewImage={previewImage} />

      <button
        type="button"
        className="player__exit"
        onClick={() => history.push(`/films/${id}`)}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getRuntime(runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  id: PropTypes.number.isRequired,
  film: PropTypes.object.isRequired,
  isLoadFilm: PropTypes.bool.isRequired,
  isLoadFilmFailed: PropTypes.bool.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    film: state.film,
    isLoadFilm: state.isLoadFilm,
    isLoadFilmFailed: state.isLoadFilmFailed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFilm: (id) => {
      dispatch(fetchFilm(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
