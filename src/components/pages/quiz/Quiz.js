import React, { useEffect,useState } from 'react'
import { CircularProgress } from '@mui/material';
import Question from '../../question/Question';
import './Quiz.css'

export default function Quiz({name,score,questions,setQuestions,setScore}) {
  const [options,setOptions]= useState()
  const [currQues,setCurrQues]= useState(0)
  useEffect(()=>{
    console.log(questions)
    setOptions(
      questions && handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ])
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[questions,currQues])
  const handleShuffle = answer =>{
    return  answer.sort(()=> Math.random() - 0.5)
  }
  return (
    <div className='quiz'>
        <span className='quiz__title'>Welcome,{name}!</span>
        {
          questions? (
          <>
            <div className='quiz__info'>
            <span>{questions[currQues].category}</span>
            <span>Score: {score}</span>
            </div>
            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>  
           
          ):(
            <div className='loading'><CircularProgress style={{color:'black'}} size={80}/></div>
            
          )
        }
    </div>
  )
}
