import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import browserHistory from '../../../browser-history';
import {login} from '../../../store/api-actions';
import {AuthorizationStatus, ErrorMessageText, RouteApp} from '../../../const';
import {initErrorAlert} from '../../../utils';
import {useHistory} from 'react-router';

const SignInForm = ({authorizationStatus, onSubmit}) => {
  const history = useHistory();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      /*
        При переходе на закрытый маршрут по прямой ссылке
        не получается вернуться назад навигацией браузера
      */
      if (history.location.state) {
        history.push(history.location.state.prevPath);
      } else {
        history.push(RouteApp.MAIN);
      }
    }
  }, [authorizationStatus]);

  const emailInput = createRef();
  const passwordInput = createRef();

  const handleFromSubmit = (evt) => {
    evt.preventDefault();

    if (!passwordInput.current.value) {
      initErrorAlert(ErrorMessageText.PASSWORD_EMPTY);

      return;
    }

    onSubmit(emailInput.current.value, passwordInput.current.value);
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={handleFromSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input ref={emailInput} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordInput} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" >Sign in</button>
      </div>
    </form>
  );
};

SignInForm.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(email, password) {
      dispatch(login({login: email, password}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
