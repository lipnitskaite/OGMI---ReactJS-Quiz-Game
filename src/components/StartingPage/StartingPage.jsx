import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './StartingPage.module.scss';
import quizData from '../../utils/data';
import {
  setCategory,
  setSelectedDifficultyLevel,
} from '../../store/slices/quizSlice';
import PageTitle from '../PageTitle/PageTitle';
import CategoryCard from '../CategoryCard/CategoryCard';
import DifficultyButton from './DifficultyButton/DifficultyButton';

function StartingPage() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.quiz.selectedCategory);
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );

  const chooseCategory = (category) => {
    dispatch(setCategory(category));
  };

  const chooseDifficultyLevel = (difficulty) => {
    dispatch(setSelectedDifficultyLevel(difficulty));
  };

  return (
    <section className={Style.startingPage}>
      <PageTitle titleText="Let's play!" />
      <div>
        <p className={Style.subtitle}>Choose your category</p>
        <ul className={Style.categories}>
          {quizData.categories.map((category) => (
            <CategoryCard
              chooseCategory={() => chooseCategory(category)}
              categoryName={category.title}
              categoryImage={category.image}
            />
          ))}
        </ul>
      </div>
      <div
        className={`${Style.difficultyContainer} ${
          selectedCategory.name !== undefined &&
          Style.difficultyContainer_visible
        }`}
      >
        <p className={Style.subtitle}>Choose the difficulty level</p>
        <ul className={Style.difficulty}>
          {selectedCategory.name !== undefined &&
            selectedCategory.difficulty.map((difficulty) => (
              <DifficultyButton
                chooseDifficultyLevel={() => chooseDifficultyLevel(difficulty)}
                difficultyLevel={difficulty.title}
              />
            ))}
        </ul>
      </div>
      <button
        className={`${Style.button} ${
          selectedDifficultyLevel.level !== undefined && Style.button_visible
        }`}
        type="button"
      >
        Start
      </button>
    </section>
  );
}

export default StartingPage;
