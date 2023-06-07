import React from 'react';

import Style from './QuestionPage.module.scss';

function QuestionPage() {
  return (
    <section className={Style.questionPage}>
      <h3 className={Style.title}>
        What is the name of Harry Potters best friend?
      </h3>
      <ul className={Style.choices}>
        <li className={Style.choice}>Luna Lovegood</li>
        <li className={Style.choice}>Luna Lovegood</li>
        <li className={Style.choice}>Luna Lovegood</li>
        <li className={Style.choice}>Luna Lovegood</li>
      </ul>
    </section>
  );
}

export default QuestionPage;
