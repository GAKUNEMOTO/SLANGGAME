import React, { useState } from 'react';
import QuestionDisplay from '../QuestionDisplay';
import OptionList from '../OptionList';
import { Link } from 'react-router-dom';

const Stage5 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questionsData = [
    {
        question: 'What does "on fleek" mean in slang?',
        options: ['A. Outdated (時代遅れ)', 'B. Perfectly styled or groomed (完璧にスタイリッシュまたは手入れされた)', 'C. Messy (乱雑)', 'D. Boring (退屈な)'],
        correctAnswer: 'B. Perfectly styled or groomed',
    },
    {
        question: 'If someone is "ghosting" you, what are they doing?',
        options: ['A. Haunting (お化けのように存在)', 'B. Ignoring and not responding (無視して返信しない)', 'C. Pranking (いたずら)', 'D. Following you (あなたを追跡)'],
        correctAnswer: 'B. Ignoring and not responding',
    },
    {
        question: 'What is the slang term for excessive or showy behavior?',
        options: ['A. Subtle (控えめ)', 'B. Flashy (派手)', 'C. Reserved (控えめ)', 'D. Modest (謙虚な)'],
        correctAnswer: 'B. Flashy',
    },
    {
        question: 'If someone says "bet" in response, what are they expressing?',
        options: ['A. A challenge (挑戦)', 'B. Agreement or affirmation (同意または肯定)', 'C. Doubt (疑念)', 'D. Surprise (驚き)'],
        correctAnswer: 'B. Agreement or affirmation',
    },
    {
        question: 'What does "cap" mean in slang?',
        options: ['A. Headwear (帽子)', 'B. Lie or exaggeration (嘘または誇張)', 'C. Celebration (祝賀)', 'D. Problem (問題)'],
        correctAnswer: 'B. Lie or exaggeration',
    },
    {
        question: 'What is the slang term for an expensive or high-quality item?',
        options: ['A. Cheap (安い)', 'B. Basic (基本的な)', 'C. Boujee (豪華な)', 'D. Simple (シンプルな)'],
        correctAnswer: 'C. Boujee',
    },
    {
        question: 'If someone is "throwing shade," what are they doing?',
        options: ['A. Complimenting (褒める)', 'B. Exposing (暴露する)', 'C. Criticizing subtly (巧妙に批判する)', 'D. Sharing (共有する)'],
        correctAnswer: 'C. Criticizing subtly',
    },
    {
        question: 'What does "clout" mean in slang?',
        options: ['A. Cloud (雲)', 'B. Popularity or influence (人気または影響力)', 'C. Quiet (静か)', 'D. Group (グループ)'],
        correctAnswer: 'B. Popularity or influence',
    },
    {
        question: 'What is the slang term for a situation with a lot of tension or drama?',
        options: ['A. Chill (冷静)', 'B. Lively (活気に満ちた)', 'C. Lit (盛り上がった)', 'D. High-key (目立つ)'],
        correctAnswer: 'D. High-key',
    },
    {
        question: 'If someone is "canceled," what does it mean?',
        options: ['A. Postponed (延期)', 'B. Disapproved and rejected (非難され拒絶された)', 'C. Celebrated (祝われた)', 'D. Upgraded (アップグレードされた)'],
        correctAnswer: 'B. Disapproved and rejected',
    },
];


  const handleSelect = (selectedOption) => {
      const currentQuestion = questionsData[currentQuestionIndex];

      if (selectedOption === currentQuestion.correctAnswer) {
          setScore(score + 1);
      }

      const nextQuestionIndex = currentQuestionIndex + 1;

      if (nextQuestionIndex < questionsData.length) {
          setCurrentQuestionIndex(nextQuestionIndex);
      } else {
          setQuizCompleted(true);
      }
  };

  const restartQuiz = () => {
      setQuizCompleted(false);
      setCurrentQuestionIndex(0); 
      setScore(0); 
  };

return (
    <div id='stage4'>
        {quizCompleted ? (
            score >= 5 ? (
                <div className='container'>
                    <h1>Your Score: {score}/{questionsData.length}</h1>
                    <h2>おめでとう！君はもう外国人です。。はい。
                    </h2>
                    <Link to="/">
                        <button to="/">ホームに戻る</button>
                    </Link>
                </div>
            ) : (
                <div className='container'>
                    <h1>Your Score: {score}/{questionsData.length}</h1>
                    <h2>また、頑張ろう！</h2>
                    <button onClick={restartQuiz}>再トライ</button>
                    <Link to="/">
                        <button to="/">ホームに戻る</button>
                    </Link>
                </div>
            )
        ) : (
            <>
                <QuestionDisplay questions={questionsData[currentQuestionIndex].question} />
                <OptionList options={questionsData[currentQuestionIndex].options} onOptionsSelect={handleSelect} />
            </>
        )}
    </div>
)
}

export default Stage5