import React, { useContext, useState } from 'react'
import { baseService } from '../network/services/baseServices'
import ToDoContext from '../context/context'

const EditTodo = ({ handleRefresh }) => {

    const { initialValue, setEditStatus, setInitialValue, editStatus } = useContext(ToDoContext)

    const changeContent = async () => {
        try {
            const data = initialValue
            await baseService.put(`/todos/${data.id}`, data)
            setEditStatus(true)
            handleRefresh()
        } catch (error) {
            console.log("edit content error", error);
        }
    }
    return (
        <div>
            {!editStatus &&
                <div className='editContainer'>
                    <input type="text"
                        className='editInput'
                        autoFocus
                        defaultValue={initialValue.content}
                        onChange={(e) => setInitialValue({ ...initialValue, content: e.target.value })} />
                    <button className='succes' onClick={changeContent}>Update</button>
                    <button className='cancel' onClick={() => setEditStatus(true)}>Cancel</button>
                </div>
            }
        </div>
    )
}

export default EditTodo
