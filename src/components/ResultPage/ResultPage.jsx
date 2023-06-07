import React from 'react';

import Style from './ResultPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

function ResultPage() {
  return (
    <section className={Style.resultPage}>
      <PageTitle titleText="Muggle Apprentice" />
      <p className={Style.subtitle}>
        Dont worry, youre just starting your journey into the wizarding world.
        Keep exploring!
      </p>
      <button className={Style.button} type="button">
        Play again
      </button>
    </section>
  );
}

export default ResultPage;
