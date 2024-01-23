import React, { useState } from 'react';
import QuestionDisplay from '../QuestionDisplay';
import OptionList from '../OptionList';
import { Link } from 'react-router-dom';

const Stage2 = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questionsData = [
      {
          question: 'What does "clutch" mean in slang?',
          options: [
              'A. Grab tightly (強くつかむ)',
              'B. Critical or crucial (重要または決定的)',
              'C. Smooth and slippery (滑らかで滑りやすい)',
              'D. Overly decorative (過度に飾られた)'
          ],
          correctAnswer: 'B. Critical or crucial',
      },
      {
          question: 'If someone is described as "extra," what does it mean?',
          options: [
              'A. Ordinary (普通)',
              'B. Extraordinary (非常に優れた)',
              'C. Excessive or over the top (過度または過剰)',
              'D. Missing (欠落している)'
          ],
          correctAnswer: 'C. Excessive or over the top',
      },
      {
          question: 'What is the slang term for being confident and stylish?',
          options: [
              'A. Swag (自信)',
              'B. Dorky (ドーキー)',
              'C. Tacky (タッキー)',
              'D. Clumsy (不器用)'
          ],
          correctAnswer: 'A. Swag',
      },
      {
          question: 'What does "FOMO" stand for in slang?',
          options: [
              'A. Fear of Moving On (進むことへの恐れ)',
              'B. Finding Our Momentary Oasis (一時的なオアシスを見つけること)',
              'C. Fear of Missing Out (見逃す恐れ)',
              'D. Forever Overcome with Memories (永遠に思い出に打ち勝つこと)'
          ],
          correctAnswer: 'C. Fear of Missing Out',
      },
      {
          question: 'If something is "on fleek," what does that mean?',
          options: [
              'A. Outdated (陳腐)',
              'B. Messy (乱雑)',
              'C. Perfect or flawless (完璧または無欠)',
              'D. Broken (壊れている)'
          ],
          correctAnswer: 'C. Perfect or flawless',
      },
      {
          question: 'What is the slang term for a fake or insincere person?',
          options: [
              'A. Phony (偽物)',
              'B. Authentic (オーセンティック)',
              'C. Genuine (ジェニュイン)',
              'D. Honest (オネスト)'
          ],
          correctAnswer: 'A. Phony',
      },
      {
          question: 'If someone is "ghosting" you, what are they doing?',
          options: [
              'A. Communicating frequently (頻繁にコミュニケーションを取る)',
              'B. Ignoring you (あなたを無視する)',
              'C. Being supportive (サポートしている)',
              'D. Giving you a gift (あなたに贈り物をする)'
          ],
          correctAnswer: 'B. Ignoring you',
      },
      {
          question: 'What does the slang term "bet" mean?',
          options: [
              'A. A wager or agreement (賭けまたは合意)',
              'B. A scolding or reprimand (叱りまたは戒め)',
              'C. A compliment (お世辞)',
              'D. A challenge (チャレンジ)'
          ],
          correctAnswer: 'A. A wager or agreement',
      },
      {
          question: 'If someone is "throwing shade," what are they doing?',
          options: [
              'A. Giving a compliment (お世辞を言う)',
              'B. Being sincere (誠実である)',
              'C. Insulting or criticizing subtly (微妙に侮辱または批判する)',
              'D. Apologizing (謝罪する)'
          ],
          correctAnswer: 'C. Insulting or criticizing subtly',
      },
      {
          question: 'What does "DM" stand for in slang?',
          options: [
              'A. Digital Music (デジタルミュージック)',
              'B. Direct Message (ダイレクトメッセージ)',
              'C. Double Meaning (ダブルミーニング)',
              'D. Dramatic Moment (ドラマティックモーメント)'
          ],
          correctAnswer: 'B. Direct Message',
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

  return(
    <div id='stage2'>
            {quizCompleted ? (
                score >= 5 ? (
                    <div className='container'>
                        <h1>Your Score: {score}/{questionsData.length}</h1>
                        <h2>おめでとう！次も頑張ろう</h2>
                        <Link to="/stage3">
                        <button to="/stage3">次のステージへ</button>
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
export default Stage2