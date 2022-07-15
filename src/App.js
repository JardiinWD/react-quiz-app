/* Import dello useState */
import React, { useState } from 'react';
/* Qua dentro ci sarà tutta l'app vera e proprio con arrau di oggetti */
export default function App() {
  /* Array di domande e risposte */
  const questions = [
    {
      /* Domanda */
      questionText: 'What is the capital of France?',
      /* Array di Risposte */
      answerOptions: [
        /* isCorrect è la condizione booleana true/false per il corretto o non corretto */
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false }],
    },
    {
      /* Domanda */
      questionText: 'Who is CEO of Tesla?',
      /* Array di Risposte */
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false }],
    },
    {
      /* Domanda */
      questionText: 'The iPhone was created by which company?',
      /* Array di Risposte */
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false }],
    },
    {
      /* Domanda */
      questionText: 'How many Harry Potter books are there?',
      /* Array di Risposte */
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true }],
    },
  ];
  /* Ora il return */
  return (
    <div className='app'>
      {false ? (<div className='score-section'>You scored 1 out of {questions.length}</div>)
        : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question 1</span>/{questions.length}
              </div>
              <div className='question-text'>This is where the question text should go</div>
            </div>
            <div className='answer-section'>
              <button>Answer 1</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
              <button>Answer 4</button>
            </div>
          </>
        )}
    </div>
  );
}


