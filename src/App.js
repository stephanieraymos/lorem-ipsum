import React, { useState } from 'react';
import data from './data';
function App() {
  
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Testing');
    }
  
  return (
  <section className="section-center">
      <h3>Tired of borem lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}></form>
      <label htmlFor="amount">
          paragraphs: 
      </label>
  </section>
    )
}

export default App;