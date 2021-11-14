import React from 'react';
import './App.scss';

import headerLogo from './_assets/logo.svg';
import submitIcon from './_assets/icon-arrow.svg';
import desktopGirlImage from './_assets/hero-desktop.jpg';
import mobileGirlImage from './_assets/hero-mobile.jpg';

const App = function MainApp() {
  return (
    <main>
      <article className="content">
        <header>
          <img src={headerLogo} alt="Base Apparel Logo" />
        </header>
        <article className="mobileImage">
          <img src={mobileGirlImage} alt="Girl posing with a orange shirt" />
        </article>
        <h1>
          <span>we&apos;re</span>
          <br />
          coming
          <br />
          soon
        </h1>
        <p>
          Hello fellow shoppers! We&apos;re currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <section className="input">
          <input type="email" placeholder="Email Address" />
          <button type="submit">
            <img src={submitIcon} alt="Submit Button" />
          </button>
        </section>
      </article>
      <article className="desktopImage">
        <img src={desktopGirlImage} alt="Girl posing with a orange shirt" />
      </article>
    </main>
  );
};

export default App;
