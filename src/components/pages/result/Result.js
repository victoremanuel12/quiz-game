import React from 'react'
import {Button} from '@mui/material'
import './Result.css'


export default function Result({score}) {
  return (
    <div className='result'>
      <span className="result_title">Final Score: {score}</span>
     <div>
            <Button 
              variant="contained"   
              size="large" 
              color="secondary"
              style={{backgroundColor:'purple' }}
              href='/'
            >
              Go to Home Page
            </Button>
     </div>
    </div>
  )
}
