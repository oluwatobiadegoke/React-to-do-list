import React from 'react'
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const List = () => {

  const { completed, deleteTodo, altList } = useGlobalContext();

  return (
      <div>
          {
            altList.map((todo) => {
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
