import React,{useState} from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'
import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';

import './Question.css'

export default function Question({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    score,
    setScore}){


    const[selected,setSelected]= useState()
    const[error,setError]= useState(false)
    const navigate = useNavigate();

    function handleSelect(option){
        if(selected === option && selected === correct){
            return 'select'
        }else if(selected === option && selected !== correct){
            return 'wrong'
        }else if( option === correct){
            return 'select'
        }
    }
    function handleCheck(option){
        setSelected(option)
        if ( option === correct){
            setScore(score + 1)
            setError(false)
        }
    }
    function  handleNext() {
        if (currQues > 8) {
            navigate("/result");
          } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
          } else setError("Please select an option first");

    }
    function handleQuit(){

    }

  return (
    <div className="question">
        <h1>Questio {currQues + 1}</h1>
        <div className="singleQuestion">
            <h2>{questions[currQues].question}</h2>
            <div className="options">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                   options &&  options.map( option => (
                        <button 
                            onClick={()=>handleCheck(option)} 
                            className={`sigleOpition ${selected && handleSelect(option)}`} 
                            key={option} 
                            disabled={selected}
                        >
                            {option}

                        </button>
                    ))
                }
            </div>
            <div className="controls">
                <Button
                    variant="contained"
                    color="secondary"
                    size='small'
                    style={{width:155, fontSize:10,height:40 }}
                    href="/"
                    onClick={handleQuit}
                >
                    Quit
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    style={{width:155, height:40 ,marginLeft:10,fontSize:10}}
                    onClick={ handleNext}

                >
                    Next Question
                </Button>
            </div>
        </div>

    </div>
  )
}
