import React from 'react';
import './App.scss';

import headerLogo from './_assets/logo.svg';
import submitIcon from './_assets/icon-arrow.svg';
import desktopGirlImage from './_assets/hero-desktop.jpg';
import mobileGirlImage from './_assets/hero-mobile.jpg';

const App = function MainApp() {
  return (
    <>
      <header>
        <img src={headerLogo} alt="Base Apparel Logo" />
      </header>
      <main>
        <article className="mobileImage">
          <img src={mobileGirlImage} alt="Girl posing with a orange shirt" />
        </article>
        <article className="content">
          <h1>
            <span>we&apos;re</span>
            {' '}
            coming soon
          </h1>
          <p>
            Hello fellow shoppers! We&apos;re currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <section className="input">
            <input type="email" placeholder="Email Address" />
            <button type="submit">{ submitIcon }</button>
          </section>
        </article>
        <article className="desktopImage">
          <img src={desktopGirlImage} alt="Girl posing with a orange shirt" />
        </article>
      </main>
    </>
  );
};

export default App;
