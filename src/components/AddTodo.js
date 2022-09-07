import React, { useRef, useState } from 'react'
import { baseService } from '../network/services/baseServices'

const AddTodo = ({ handleRefresh }) => {
    const [todo, setTodo] = useState("")
    const [inputControl, setInputControl] = useState(true)

    const inputRef = useRef()

    const addTodo = async () => {
        try {
            const title = todo
            if (todo.length >= 3) {
                const todos = {
                    content: title,
                    isCompleted: false,
                }
                await baseService.post("/todos", todos)
                handleRefresh()
                setTodo("")
            } else {
                console.log("22222");
                setInputControl(false)
            }
        } catch (error) {
            console.log("add data error", error);
        }
    }

    const inputChange = () => {
        setTodo(inputRef.current.value)
        if ((inputRef.current.value).length >= 3) {
            setInputControl(true)

        }
    }
    return (
        <>
            <div className='header'>

                <input type="text"
                    className={inputControl ? "" : "alert"}
                    placeholder='Add Todo'
                    value={todo}
                    ref={inputRef}
                    onChange={inputChange} />
                <button onClick={addTodo}>Add ToDo</button>
            </div>
            {!inputControl && <div className='inputError'><h3>To short</h3></div>}

        </>
    )
}

export default AddTodo
