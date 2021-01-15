import React from 'react'
import './index.css';
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import List from './List'
import { useGlobalContext } from "./context";

const App = () => {

  const { 
    handleSubmit, 
    input, setInput, 
    altList, 
    showAll, 
    showActive, 
    showCompleted, 
    clearComplete, 
    lightMode, 
    lightmode, 
    darkMode 
  } = useGlobalContext();

  return (
    <main className="App">
      <section className="top-bcg"></section>
      <section className="todo">
        <div className="description">
          <h1>TODO</h1>
          {lightmode ? (
            <BsMoon onClick={darkMode} />
          ) : (
            <BsFillBrightnessHighFill onClick={lightMode} />
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <MdRadioButtonUnchecked />
            <input
              type="text"
              value={input}
              placeholder="Create a new todo..."
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button type="submit">
            <IoEnterOutline />
          </button>
        </form>
        {altList.length > 0 && (
          <List />
        )}
        <div className="indicators">
          <p className="left">{altList.length} item(s) left</p>
          <div className="mobile-no">
            <button onClick={showAll} type="submit">
              All
            </button>
            <button onClick={showActive} type="submit">
              Active
            </button>
            <button onClick={showCompleted} type="submit">
              Completed
            </button>
          </div>
          <button onClick={clearComplete} type="submit">
            clear completed
          </button>
        </div>
        <div className="mobile-yes">
          <button onClick={showAll} type="submit">
            All
          </button>
          <button onClick={showActive} type="submit">
            Active
          </button>
          <button onClick={showCompleted} type="submit">
            Completed
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
