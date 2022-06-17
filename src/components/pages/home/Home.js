/* eslint-disable react/jsx-no-duplicate-props */
import React,{useState} from 'react'
import "./Home.css"
import {MenuItem, TextField,Button} from '@mui/material'
import Categories from '../../data/Categories'
import ErrorMessage from '../../errorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom';

export default function Home({name,setName,fetchQuestions}) {
  const[category,setCategory] = useState("")
  const[difficulty,setDifficulty] = useState("")
  const[error,setError] = useState(false)
  const navigate = useNavigate();


  function handleSumit(){
    if(!category || !difficulty || !name){
      setError(true)
    }else{
      setError(false)
      fetchQuestions(category,difficulty)
      navigate('/quiz');


    }

  }

  return (
    <div  className='content'>
        <div className="settings">
          { error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <span>Configurações do Quiz</span>
          <div className="settings_select">
            <TextField 
              label="Enter your Name" 
              variant='outlined' 
              style={{marginBottom:20}}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField   
              id="outlined-select-currency-native" 
              select label="Select" 
              helperText="Please select your category" 
              style={{marginBottom:20}}
              onChange={(e) => setCategory(e.target.value)}
              value={category}

             >
              {
                Categories.map((categorie) => (

                  <MenuItem key={categorie.value} value={categorie.value}>{categorie.category}</MenuItem>
                ))
              }

            </TextField>
            <TextField 
              select label="Select your difficulty" 
              variant='outlined' 
              style={{marginBottom:20}} 
              onChange={(e) => setDifficulty(e.target.value)} 
              value={difficulty}

            >
              <MenuItem  key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>            
            </TextField>
            <Button 
              variant="contained"   
              size="large" 
              color="primary"
              onClick={handleSumit}
              >
                  Start Quiz
             </Button>


           
          </div>
        </div>
          <img src="\img\game.svg" alt="Quiz Bannner"  className="banner" />

    </div>
    
  )
}



