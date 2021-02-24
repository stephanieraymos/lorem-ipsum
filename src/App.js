import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testing");
  };

  return (
    <section className="section-center">
      <h3>Tired of borem lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          rerum quod vero molestias voluptate facilis, eum sapiente. Assumenda
          ea expedita labore, mollitia officia cupiditate illo?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          rerum quod vero molestias voluptate facilis, eum sapiente. Assumenda
          ea expedita labore, mollitia officia cupiditate illo?
        </p>
      </article>
    </section>
  );
}

export default App;
