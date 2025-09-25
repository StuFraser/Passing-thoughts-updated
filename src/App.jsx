import { useState } from 'react'
import './App.css'
import { AddThoughtForm } from './components/AddThoughtForm'
import { Thought } from './components/Thought'
import { generateId, getNewExpirationTime } from './utilities';

function App() {
    const [thoughts, setThoughts] = useState([]);

  const addThought = (thought) => {
    setThoughts((prevThoughts) => [thought, ...prevThoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prevThoughts) => prevThoughts.filter((thought) => thought.id !== thoughtIdToRemove));
  };

  return (
    <>
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
    </>
  )
}

export default App
