import React, { useState, useEffect } from 'react';
import '../public/stylesheet.css';
import './Question.css';
import './App.css';
import BodyComponent from './components/BodyComponent';
import NavBarComponent from './components/NavBarComponent';
import Questions from './Questions';
import ResultComponent from './components/ResultComponent';

function App() {
  const [started, setStarted] = useState<Boolean>(false)
  const questions = Questions
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [question,setQuestion] = useState(questions[currentQuestion])
  const [answered,setAnswered] = useState(false)
  const [correctAnswers,setCorrectAnswers] = useState(0)
  const [fact,setFact] = useState("")
  const [isCorrectAnswer,setIsCorrectAnswer] = useState(false)

  useEffect(()=>{
    setQuestion(questions[currentQuestion])
  },[currentQuestion])

  function start() {
    setStarted(true)
    setTimeout(() => {  
      const start = document.getElementById("start")
      window.scroll({
        top:start?.offsetTop,
        left:0,
        behavior: "smooth"
      })
    }, 100);
  }

  function answerHandler(e: any) {
    const answerText = e?.target.parentElement.querySelector(".answer-btn-text").innerText
    setAnswered(true)
    document.body.style.overflow = 'hidden';
    if (answerText===question.correctAnswer) {
      setCorrectAnswers(correctAnswers+1)
      setIsCorrectAnswer(true)
      setFact(question.goodfact)
    }
    else{
    setFact(question.badfact)
    }
    setCurrentQuestion(currentQuestion+1)
  
  }

  return (
    <>
    <NavBarComponent/>
    <BodyComponent start={start}/>
    {
      started
      ?
      <>
        <img src={question.image} className='fullimage'/>
        <div className='fullscreen test' id='start'>  
          {
            answered
            ?<ResultComponent setIsCorrectAnswer={setIsCorrectAnswer} setAnswered={setAnswered} isCorrectAnswer={isCorrectAnswer} fact={fact}/>
            :
            <div className='fullscreen-hello test-block'>
                <div className='question'><img width={40} src='../public/question.png' />{question.question}</div>
                <div className='progress-show'><div className='progress-bar'><div className='progress' style={{width:((currentQuestion+1)/questions.length)*100+`%`}}></div></div>{currentQuestion+1}/{questions.length}</div>
                <div className='answers'>
                    {
                      question.answers.map((item,index)=>(
                        <div className='answer-btn' key={index}><div className='answer-btn-index' onClick={answerHandler}>{index+1}</div><div className='answer-btn-text' onClick={answerHandler}>{item}</div></div>
                      ))
                    }
                </div>
            </div>
          }
          <footer className='footer'>
            <div className='footer-command'>
              <img className='golem' src='../public/comand-logo.png'/>
              <div className='footer-text'> © 2023 HOHMA TEAM</div>
            </div>
            <div className='footer-social'>
              <div className='footer-social-block'>  
                <img className='footer-icon' src='../public/phone.png'/>
                <div className='footer-text'>+380993333390</div>
              </div>
              <div className='footer-social-block'>  
                <img className='footer-icon' src='../public/mail.png'/>
                <div className='footer-text'>suportppfkquiz@gmail.com</div>
              </div>
            </div>
          </footer>
        </div>
        
      </>
      :<></>
    }
    </>
  );
}

export default App;
