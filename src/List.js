import React from 'react'
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const List = ({todos, deleteTodo, completed}) => {
    return (
        <div>
            {
                todos.map((todo) => {
                    const {id, name} = todo;
                    return (
                      <section className="do" key={id}>
                        <button onClick={() => completed(id)}>
                          <MdRadioButtonUnchecked />
                        </button>
                        <p>{name}</p>
                        <button onClick={() => deleteTodo(id)}>
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
