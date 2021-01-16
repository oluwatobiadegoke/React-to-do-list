import React from 'react'
import { BsCheck } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"

const List = () => {

  const { completed, deleteTodo, altList, lightmode } = useGlobalContext();

  return (
      <div>
          {
            altList.map((todo) => {
                const {id, name, complete} = todo;
                return (
                  <section className={lightmode ? "do" : "dodark"} key={id}>
                    <div className="todo-cont">
                      <div className="circle" onClick={() => completed(id)}>
                        {complete && <BsCheck className="check" />}
                      </div>
                      <p className={lightmode ? "names" : "namesdark"}>{name}</p>
                    </div>
                    <button className="delete" onClick={() => deleteTodo(id)}>
                      <FaTimes />
                    </button>
                  </section>
                );
            })
          }
      </div>
  )
}

export default List
