import {AuthorizationStatus} from "../../const";
import {ActionTypes} from "../types";
import {user} from "./user";

const userInfo = {
  id: 1,
  name: `test`,
  email: `test@yandex.ru`,
  avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`
};


describe(`Reducer 'data' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    const initialState = {
      user: {},
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    expect(user(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set in 'user' state new user data`, () => {
    const state = {
      user: {},
      otherUserData: `Other user data`,
    };

    const loadUserAction = {
      type: ActionTypes.LOAD_USER,
      payload: userInfo,
    };

    expect(user(state, loadUserAction))
      .toEqual({user: loadUserAction.payload, otherUserData: `Other user data`});
  });

  it(`Reducer should change user authorization status`, () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      otherUserData: `Other user data`,
    };

    const requiredAuthorizationAction = {
      type: ActionTypes.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: requiredAuthorizationAction.payload, otherUserData: `Other user data`});
  });
});
