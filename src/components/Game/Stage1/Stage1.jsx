import React, { useState } from 'react';
import QuestionDisplay from '../QuestionDisplay';
import OptionList from '../OptionList';
import { Link } from 'react-router-dom';
import './Stage1.css';

const Stage1 = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);


    const questionsData = [
        {
            question: 'What does "lit" mean?',
            options: ['A. Illuminated（照明された）', 'B. Drunk or intoxicated(酔っているまたは中毒状態）', 'C. Angry (怒っている)', 'D. Confused (混乱している)'],
            correctAnswer: 'B. Drunk or intoxicated',
        },

        {
            question: 'What does "flex" mean in slang?',
            options: ['A. Exercise (運動)', 'B. Show off(自慢する)', 'C. Bend(曲げる)', 'D. Dance(ダンス)'],
            correctAnswer: 'B. Show off (自慢する)',
        },

        {
            question: 'Choose the correct meaning of "GOAT" in slang.',
            options: ['A. Animal sound(動物の鳴き声)', 'B. Greatest of all time(史上最高)', 'C. A type of cheese(チーズの一種)', 'D. A sailing term(帆走の言葉)'],
            correctAnswer: 'B. Greatest of all time',
        },

        {
            question: 'What does "vibing" mean?',
            options: ['A. Shaking(揺れている)', 'B. Listening to music(音楽を聴いている)', 'C. Fishing(釣りをしている)', 'D. Running(走っている)'],
            correctAnswer: 'B. Listening to music',
        },

        {
            question: 'Select the correct meaning of "lit AF."',
            options: ['A. Literally on fire(文字通り燃えている)', 'B. Extremely excited(非常に興奮している)', 'C. Dimly lit(薄暗い)', 'D. Litigation as a Friend(仲裁友として)'],
            correctAnswer: 'B. Extremely excited',
          },

          {
            question: 'If someone says, "I\'m shook," what does it mean?',
            options: ['A. Cold(寒い)', 'B. Excited(興奮している)', 'C. Surprised or shocked(驚いているまたはショックを受けている)', 'D. Tired(疲れている)'],
            correctAnswer: 'C. Surprised or shocked',
          },

          {
            question: 'What is the slang term for a very attractive person?',
            options: ['A. Geek', 'B. Nerd', 'C. Hottie', 'D. Smarty'],
            correctAnswer: 'C. Hottie',
          },

          {
            question: 'What does "Savage" mean in slang?',
            options: ['A. Wild and untamed(野生で未開の)', 'B. Beautiful(美しい)', 'C. Cruel or fierce(残酷または凶暴)', 'D. Smart and witty(賢く機知に富んでいる)'],
            correctAnswer: 'C. Cruel or fierce',
          },

          {
            question: 'What is the slang term for gossip or rumors?',
            options: ['A. Scoop（スクープ)', 'B. Tea(ティー)', 'C. Java(ジャヴァ)', 'D. Espresso(エスプレッソ)'],
            correctAnswer: 'B. Tea',
          },

          {
            question: 'If someone is "hangry," what does it mean?',
            options: ['A. Happy and grateful (幸せで感謝している)', 'B. Sad and lonely (悲しくて寂しい)', 'C. Angry due to hunger(飢えによる怒り)', 'D. Excited and energetic(興奮してエネルギッシュ)'],
            correctAnswer: 'C. Angry due to hunger',
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
        setScore(0);
    };

    return (
        <div id='stage1'>
            {quizCompleted ? (
                score >= 5 ? (
                    <div className='container'>
                        <h1>Your Score: {score}/{questionsData.length}</h1>
                        <h2>おめでとう！次も頑張ろう</h2>
                        <Link to="/stage2">
                        <button to="/stage2">次のステージへ</button>
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

export default Stage1;
