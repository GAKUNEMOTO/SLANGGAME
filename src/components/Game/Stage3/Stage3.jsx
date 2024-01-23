import React, { useState } from 'react';
import QuestionDisplay from '../QuestionDisplay';
import OptionList from '../OptionList';
import { Link } from 'react-router-dom';

const Stage3 = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questionsData = [
      {
          question: 'What does "on the down-low" mean in slang?',
          options: [
              'A. Publicly known (公然と知られている)',
              'B. Secret or discreet (秘密または控えめ)',
              'C. Upbeat and lively (陽気で活気に満ちている)',
              'D. In a hurry (急いで)'
          ],
          correctAnswer: 'B. Secret or discreet',
      },
      {
          question: 'If someone is "throwing hands," what are they doing?',
          options: [
              'A. Applauding (拍手)',
              'B. Gesturing wildly (手振り)',
              'C. Fighting or ready to fight (戦っているか戦う準備ができている)',
              'D. Waving goodbye (さようならを振る)'
          ],
          correctAnswer: 'C. Fighting or ready to fight',
      },
      {
          question: 'What is the slang term for being very knowledgeable or skilled in a particular area?',
          options: [
              'A. Novice (初心者)',
              'B. Guru (グル)',
              'C. Dabbler (たしなむ人)',
              'D. Rookie (新米)'
          ],
          correctAnswer: 'B. Guru',
      },
      {
          question: 'If someone says, "I\'m dead," what does it mean?',
          options: [
              'A. Physically deceased (物理的に死亡)',
              'B. Extremely tired (非常に疲れている)',
              'C. Hilarious or funny (おかしくて面白い)',
              'D. Upset or angry (怒っている)'
          ],
          correctAnswer: 'C. Hilarious or funny',
      },
      {
          question: 'What does "litigation as a friend" mean in the context of slang?',
          options: [
              'A. Legal advice from a friend (友達からの法的助言)',
              'B. Friend who is always involved in lawsuits (いつも訴訟に関与する友達)',
              'C. Party time with friends (友達とのパーティータイム)',
              'D. Friend who loves to argue (議論が好きな友達)'
          ],
          correctAnswer: 'C. Party time with friends',
      },
      {
          question: 'If someone is "turnt up," what state are they in?',
          options: [
              'A. Calm and composed (穏やかで冷静)',
              'B. Intoxicated or excited (中毒または興奮している)',
              'C. Sad and emotional (悲しくて感情的)',
              'D. Sleepy (眠い)'
          ],
          correctAnswer: 'B. Intoxicated or excited',
      },
      {
          question: 'What does "AFK" stand for in online slang?',
          options: [
              'A. Away From Keyboard (キーボードから離れて)',
              'B. Amazingly Fast Kicks (驚くほど速いキック)',
              'C. All For Kicks (蹴るためにすべて)',
              'D. Always Finding Knowledge (知識を常に見つける)'
          ],
          correctAnswer: 'A. Away From Keyboard',
      },
      {
          question: 'If someone is described as "woke," what does it mean?',
          options: [
              'A. Sleepy (眠い)',
              'B. Aware of social issues (社会問題に気づいている)',
              'C. Unintelligent (無知)',
              'D. Boring (退屈)'
          ],
          correctAnswer: 'B. Aware of social issues',
      },
      {
          question: 'What is the slang term for someone who is being overly dramatic or exaggerating?',
          options: [
              'A. Chill (冷静)',
              'B. Drama queen (ドラマクイーン)',
              'C. Laid back (くつろいでいる)',
              'D. Reserved (控えめ)'
          ],
          correctAnswer: 'B. Drama queen',
      },
      {
          question: 'If someone says, "I can\'t even," what does it express?',
          options: [
              'A. Complete understanding (完全な理解)',
              'B. Strong disagreement (強い不同意)',
              'C. Total confusion or disbelief (全体的な混乱または信じられない)',
              'D. Emotional stability (感情の安定)'
          ],
          correctAnswer: 'C. Total confusion or disbelief',
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
        <div id='stage3'>
            {quizCompleted ? (
                score >= 5 ? (
                    <div className='container'>
                        <h1>Your Score: {score}/{questionsData.length}</h1>
                        <h2>おめでとう！次も頑張ろう</h2>
                        <Link to="/stage4">
                            <button to="/stage4">次のステージへ</button>
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
    );
};

export default Stage3;
