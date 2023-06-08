import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Style from './Main.module.scss';
import quizData from '../../utils/data';
import {
  setCategory,
  setSelectedDifficultyLevel,
} from '../../store/slices/quizSlice';
import PageTitle from '../PageTitle/PageTitle';
import CategoryCard from './CategoryCard/CategoryCard';
import DifficultyButton from './DifficultyButton/DifficultyButton';

function Main() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.quiz.selectedCategory);
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(null);

  const chooseCategory = (category, index) => {
    setSelectedCategoryIndex(index);
    dispatch(setCategory(category));
  };
  const chooseDifficultyLevel = (difficulty, index) => {
    setSelectedDifficultyIndex(index);
    dispatch(setSelectedDifficultyLevel(difficulty));
  };

  return (
    <section className={Style.main}>
      <PageTitle titleText="Let's play!" />
      <div>
        <p className={Style.subtitle}>Choose your category</p>
        <ul className={Style.categories}>
          {quizData.categories.map((category, index) => (
            <li className={Style.listItem} key={category.name}>
              <CategoryCard
                chooseCategory={() => chooseCategory(category, index)}
                index={index}
                selectedCategoryIndex={selectedCategoryIndex}
                categoryName={category.title}
                categoryImage={category.image}
              />
            </li>
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
            selectedCategory.difficulty.map((difficulty, index) => (
              <li className={Style.listItem} key={difficulty.level}>
                <DifficultyButton
                  chooseDifficultyLevel={() =>
                    chooseDifficultyLevel(difficulty, index)
                  }
                  selectedDifficultyIndex={selectedDifficultyIndex}
                  index={index}
                  difficultyLevel={difficulty.title}
                />
              </li>
            ))}
        </ul>
      </div>
      <Link
        to={`${selectedCategory.name}_${selectedDifficultyLevel.level}`}
        className={`${Style.button} ${
          selectedDifficultyLevel.level !== undefined && Style.button_visible
        }`}
      >
        Start
      </Link>
    </section>
  );
}

export default Main;
