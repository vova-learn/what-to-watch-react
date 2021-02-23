import React from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../props-validation';
import {useHistory} from 'react-router-dom';
import {getRuntime} from '../../utils';

const PlayerScreen = ({films, id}) => {
  const film = films.filter((item) => item.id === id);
  const {name, previewImage, videoLink, runTime} = film[0];
  const history = useHistory();

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={previewImage}></video>

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

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
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  id: PropTypes.number.isRequired,
};

export default PlayerScreen;
