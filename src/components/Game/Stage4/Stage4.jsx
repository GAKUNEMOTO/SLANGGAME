import React, { useState } from 'react';
import QuestionDisplay from '../QuestionDisplay';
import OptionList from '../OptionList';
import { Link } from 'react-router-dom';

const Stage4 = () => {
  const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questionsData = [
      {
          question: 'What does "finna" mean in slang?',
          options: ['A. Gonna (するつもり)', 'B. Finally (最終的に)', 'C. Fun (楽しい)', 'D. Finished (終了)'],
          correctAnswer: 'A. Gonna',
      },
      {
          question: 'If someone is "woke," what does it mean?',
          options: ['A. Tired (疲れている)', 'B. Ignorant (無知)', 'C. Aware and socially conscious (気づいて社会的に意識的)', 'D. Excited (興奮している)'],
          correctAnswer: 'C. Aware and socially conscious',
      },
      {
          question: 'What is the slang term for a fake or deceptive person?',
          options: ['A. Genuine (本物の)', 'B. Faker (模造品)', 'C. Phony (偽物)', 'D. Pretender (見せかけ者)'],
          correctAnswer: 'C. Phony',
      },
      {
          question: 'If something is "sketchy," what does it mean?',
          options: ['A. Artistic (芸術的な)', 'B. Shady or suspicious (危ないまたは疑わしい)', 'C. Colorful (カラフル)', 'D. Exciting (ワクワクする)'],
          correctAnswer: 'B. Shady or suspicious',
      },
      {
          question: 'What does "hundo P" mean in slang?',
          options: ['A. One hundred percent (100％)', 'B. Halfway (半分)', 'C. Hundred dollars (100ドル)', 'D. Happy (幸せ)'],
          correctAnswer: 'A. One hundred percent',
      },
      {
          question: 'What is the slang term for a funny or comical person?',
          options: ['A. Serious (真剣な)', 'B. Joker (ジョーカー)', 'C. Clown (ピエロ)', 'D. Miserable (惨めな)'],
          correctAnswer: 'B. Joker',
      },
      {
          question: 'If someone says "I\'m dead," what does it mean?',
          options: ['A. Tired (疲れている)', 'B. Really funny (本当に面白い)', 'C. Angry (怒っている)', 'D. Bored (退屈している)'],
          correctAnswer: 'B. Really funny',
      },
      {
          question: 'What is the slang term for a difficult or challenging situation?',
          options: ['A. Cake walk (簡単なこと)', 'B. Piece of cake (朝飯前)', 'C. Real talk (本音)', 'D. Dilemma (ジレンマ)'],
          correctAnswer: 'D. Dilemma',
      },
      {
          question: 'What does "litigate" mean in slang?',
          options: ['A. Argue (論争する)', 'B. Celebrate (祝う)', 'C. Illuminate (照らす)', 'D. Investigate (調査する)'],
          correctAnswer: 'B. Celebrate',
      },
      {
          question: 'If someone is "jelly," what does it mean?',
          options: ['A. Sweet (甘い)', 'B. Jealous (嫉妬している)', 'C. Jiggly (プルプルした)', 'D. Jovial (陽気な)'],
          correctAnswer: 'B. Jealous',
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
        setCurrentQuestionIndex(0); // 1問目から再スタート
        setScore(0); // スコアもリセット
    };

  return (
      <div id='stage4'>
          {quizCompleted ? (
              score >= 5 ? (
                  <div className='container'>
                      <h1>Your Score: {score}/{questionsData.length}</h1>
                      <h2>おめでとう！次も頑張ろう</h2>
                      <Link to="/stage5">
                          <button to="/stage5">次のステージへ</button>
                      </Link>
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

export default Stage4