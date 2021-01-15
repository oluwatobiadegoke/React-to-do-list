import React, { useState, useContext } from 'react'

const AppContext = React.createContext();
const getLocalStorage = () => {
        let theList = localStorage.getItem("list");
        if(theList) {
            return(theList = JSON.parse(localStorage.getItem("list")))
        } else {
            return [];
        }
    }

const AppProvider = ({children}) => {

    const [input, setInput] = useState('');
    const [lightmode, setLightmode] = useState(true);
    const [list, setList] = useState(getLocalStorage());
    const [altList, setAltList] = useState(getLocalStorage());
    

    const handleSubmit = (e) => {
    e.preventDefault();
    if(input) {
        const newInput = {id: new Date().getTime().toString(), name: input, complete: false};
        setList([...list, newInput]);
        setAltList([...list, newInput]);
        setInput('');
    }
    }

    const deleteTodo = (id) => {
    const newTodo = list.filter((item) => item.id !== id);
    setList(newTodo);
    setAltList(newTodo);
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
    setAltList(theCompleted);
    }

    const showAll = () => {
    const all = list.map((items) => items)
    setAltList(all);
    }

    const clearComplete = () => {
    const cleared = list.filter((item) => item.complete !== true);
    setList(cleared);
    setAltList(cleared);
    }

    const showActive = () => {
    const theActive = list.filter((item) => item.complete === false);
    setAltList(theActive)
    }

    React.useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list, completed]);

    return (
        <AppContext.Provider
            value={{
                handleSubmit,
                input,
                setInput,
                altList,
                setAltList,
                showAll,
                showActive,
                showCompleted,
                clearComplete,
                lightmode,
                lightMode,
                deleteTodo,
                completed,
                darkMode
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }