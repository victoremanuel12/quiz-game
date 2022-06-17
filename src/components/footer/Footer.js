import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
        <p>Feito com muita dedicação pelo programador  <strong>Victor Emanuel</strong></p>
        <div>
           <a href="#/"> <LinkedInIcon fontSize="large"/></a>
            <a href="#/"><GitHubIcon fontSize="large"/></a>
            <a href="#/"><InstagramIcon fontSize="large"/></a>
        </div>
    </footer>
  )
}
