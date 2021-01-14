import React from 'react'
import './index.css';
import {useState, useEffect} from 'react';
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import List from './List'

const App = () => {

  const [input, setInput] = useState('');
  const [lightmode, setLightmode] = useState(true);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input) {
      const newInput = {id: new Date().getTime().toString(), name: input, complete: false};
      setList([...list, newInput]);
      setInput('');
    }
  }

  const deleteTodo = (id) => {
    const newTodo = list.filter((item) => item.id !== id);
    setList(newTodo);
  }

  const lightMode = () => {
    setLightmode(true);
  }

  const darkMode = () => {
    setLightmode(false);
  }

  const completed = (id) => {
    const done = list.find((item) => item.id === id);
    done.complete = true;
  }

  const showCompleted = () => {
    const theCompleted = list.filter((item) => item.complete === true);
    setList(theCompleted)
  }

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
        {(list.length > 0) && (
          <List todos={list} deleteTodo={deleteTodo} completed={completed} />
        )}
        <div className="indicators">
          <p className="left">{list.length} item(s) left</p>
          <div className="mobile-no">
            <button type="submit">All</button>
            <button type="submit">Active</button>
            <button onClick={showCompleted} type="submit">
              Completed
            </button>
          </div>
          <button type="submit">clear completed</button>
        </div>
        <div className="mobile-yes">
          <button type="submit">All</button>
          <button type="submit">Active</button>
          <button onClick={showCompleted} type="submit">
            Completed
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
