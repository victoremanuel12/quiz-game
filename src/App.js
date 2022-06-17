import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Result from './components/pages/result/Result';
import Quiz from './components/pages/quiz/Quiz';
import axios from 'axios'
function App() {
  const[name,setName] = useState()
  const[questions,setQuestions] =  useState()
  const[score,setScore] =  useState(0)


  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
    setQuestions(data.results);
  };
  return (
   <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={
            <Home 
            name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions}
            />}
          />
          <Route path="/quiz" element={
            <Quiz 
            name={name} 
            questions={questions} 
            score={score} 
            setScore={setScore} 
            setQuestions={setQuestions}
            />}
          />
            
          <Route path="/result" element={<Result score={score} />} />

        </Routes>
      </div>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
