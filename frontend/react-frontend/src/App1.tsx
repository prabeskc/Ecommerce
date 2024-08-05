import React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Display from './component/Display';


function App() {
  const handleclick=() =>{
    console.log("you clicked me daddy")
  }
  return (
    <div>
        <Header />
        <Display  
        FirstName={"prabesh"}
        Lastname={"kc"}
        onclick={handleclick}

        />
        <Footer />
    </div>
  );
}

export default App;
