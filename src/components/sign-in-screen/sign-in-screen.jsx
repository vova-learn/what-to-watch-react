import React from 'react';

import Header from '../header/header';
import SignInForm from './sign-in-form/sign-in-form';
import Footer from '../footer/footer';

const SignInScreen = () => {
  return (
    <div className="user-page">

      <Header isHiddenSignInButton isVisibleTitle>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <SignInForm />
      </div>

      <Footer />

    </div>
  );
};

export default SignInScreen;
