/* Import dello useState */
import React, { useState } from 'react';
/* Qua dentro ci sarà tutta l'app vera e proprio con arrau di oggetti */
export default function App() {
  /* Array di domande e risposte */
  const questions = [
    {
      /* Domanda */
      questionText: 'Qual e la capitale della Francia?',
      /* Array di Risposte */
      answerOptions: [
        /* isCorrect è la condizione booleana true/false per il corretto o non corretto */
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Londra', isCorrect: false },
        { answerText: 'Parigi', isCorrect: true },
        { answerText: 'Dublino', isCorrect: false }],
    },
    {
      /* Domanda */
      questionText: 'Chi è il CEO di Tesla?',
      /* Array di Risposte */
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false }],
    },
    {
      /* Domanda */
      questionText: 'Da quale compagnia è stato creato l\'iphone ?',
      /* Array di Risposte */
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false }],
    },
    {
      /* Domanda */
      questionText: 'Quanti sono i libri di Harry Potter commercializzati?',
      /* Array di Risposte */
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true }],
    },
  ];

  /* useState necessari per la domanda corrente */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  /* console.log("Eseguo una verifica in console");
  console.log(`${currentQuestion}`); */

  /* Function useState per il risultato del giocatore */
  /* Di default settato su false */
  const [showScore, setShowScore] = useState(false)

  /* Risultato ottenuto */
  const [score, setScore] = useState(0);


  /* Cambio al click della domanda e risposta */
  const answerButtonClick = (isCorrect) => {
    /* Condizione se la risposta è giusta */
    if (isCorrect === true) {
      /* Se la risposta fosse corretta al metodo setScore viene dato il risultato maggiorato di 1 */
      setScore(score + 1)
    }


    /* La prossima domanda equivale a quella corrente + 1 */
    const nextQuestion = currentQuestion + 1;
    /* Avvio la costante setCurrentQuestion */
    setCurrentQuestion(nextQuestion);
    /* console.log(setCurrentQuestion(nextQuestion)); */
    /* Aggiungo una condizione nel caso in cui il giocatore conclude le domande a disp. */
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      /* Se hai finito le domande a disposizione esce l'alert in pagina */
      /* alert("Hai completato il quiz!") */
      /* questo è il risultato che viene settato su true solo verso la fine delle domande */
      setShowScore(true)
    }
  }

  /* Ora il return */
  return (
    <div className='app'>
      {showScore ? (<div className='score-section'>Ne hai indovinate {score} su {questions.length} !</div>)
        : (
          <>
            <div className='question-section'>
              {/* Zona del titolo domanda */}
              <div className='question-count'>
                <span>Domanda {currentQuestion + 1}</span>/{questions.length}
              </div>
              {/* Questa è la domanda */}
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {/* Filtro dell'array di oggetti superiori 
                questions => il mio array principale
                [currentQuestion] => oggetto in posizione 0
                .answerOptions => array con le possibilit risposte
                .map() => il filtro delle possibili risposte
                => è la arrow function che contiene al suo interno
                (<button>{answerOptions.answerText}</button>) => un button con al suo interno la risposta              
                onClick={answerButtonClick} => metodo al click per mandare alla domanda successiva
              */}
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button onClick={() => answerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              ))}
            </div>
          </>
        )}
    </div>
  );
}


