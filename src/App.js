import React from 'react'
import './index.css';
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { IoEnterOutline } from "react-icons/io5";
import List from './List'
import { useGlobalContext } from "./context";
import { useRef, useEffect } from 'react'

const App = () => {

  const todoInput = useRef('');

  const { 
    handleSubmit, 
    input, 
    setInput, 
    altList, 
    showAll, 
    showActive, 
    showCompleted, 
    clearComplete, 
    lightMode, 
    lightmode, 
    darkMode,
  } = useGlobalContext();

  useEffect(() => {
    const thebody = document.getElementById("body");
    if(lightmode) {
      thebody.style.background = "hsl(236, 33%, 92%)";
    } else {
      thebody.style.background = "hsl(235, 21%, 11%)";
    }
  }, [lightmode])
  
  useEffect(() => {
    todoInput.current.focus();
  }, [])

  return (
    <main className={lightmode ? "App": "Appdark"}>
      <section className={lightmode ? "top-bcg": "top-bcg-dark"}></section>
      <section className="todo">
        <div className="description">
          <h1>TODO</h1>
          {lightmode ? (
            <BsMoon className="top-icon" onClick={darkMode} />
          ) : (
            <BsFillBrightnessHighFill
              className="top-icon"
              onClick={lightMode}
            />
          )}
        </div>
        <form className={lightmode ? "theform": "theformdark"} onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="text"
              value={input}
              placeholder="Create a new todo..."
              onChange={(e) => setInput(e.target.value)}
              ref={todoInput}
            />
          </div>
          <button className="submit" type="submit">
            <IoEnterOutline />
          </button>
        </form>
        {/* List component */}
        {altList.length > 0 && <List />}
        {/* ============== */}
        <div className={lightmode ? "indicators": "indicatorsdark"}>
          <p className={lightmode ? "left": "leftdark"}>{altList.length} item(s) left</p>
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
          <button className="clear" onClick={clearComplete} type="submit">
            clear completed
          </button>
        </div>
        <div className={lightmode ? "mobile-yes": "mobile-yesdark"}>
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
        <p className="info">To identify a todo as completed, please click the circular button on the left.</p>
      </section>
      
    </main>  
  );
}

export default App;
