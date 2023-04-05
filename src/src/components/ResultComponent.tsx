import {useEffect, useState} from 'react'

interface ResultProps{
    isCorrectAnswer:boolean,
    fact:string,
    setAnswered:any,
    setIsCorrectAnswer:any,
}

const ResultComponent = (props:ResultProps) => {
    const [time,setTime] = useState(10)

    useEffect(()=>{
        if (time===0) {
            nextQuestion()
        }
        else{
            setTimeout(()=>{
                setTime(time-1)
            },1000)
        }
    },[time])


    function nextQuestion() {
        props.setAnswered(false)
        props.setIsCorrectAnswer(false)
    }


    return (  
        props.isCorrectAnswer
        ?
        <div className='goodanswer'>
            <div className='fullscreen-hello correct-block'>
              <div className='result-block'>
                <div style={{flex:"20%"}}><div className='timer'>{time}</div></div>
                <div className='text'>Правильна відповідь!</div>
                <div className='arrow' onClick={nextQuestion}>➜</div>
              </div>
              <img className="result-smile" src="../public/smile.png"/>
              <div className="result-text">
                {props.fact}
              </div>
            </div>
        </div>
        :
        <div className='badanswer'>
            <div className='fullscreen-hello incorrect-block'>
              <div className='result-block'>
                <div style={{flex:"20%"}}><div className='timer'>{time}</div></div>
                <div className='text'>Неправильна відповідь!</div>
                <div className='arrow' onClick={nextQuestion}>➜</div>
              </div>
              <img className="result-smile" src="../public/angry.png"/>
              <div className="result-text">
                {props.fact}
              </div>
            </div>
        </div>
    )
}

export default ResultComponent