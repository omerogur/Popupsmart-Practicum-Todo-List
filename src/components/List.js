import React, { useContext, useState } from 'react'
import { DeleteForeverIcon, EditIcon, AddTaskIcon, EditOffIcon } from '../icons/icons'
import { baseService } from '../network/services/baseServices'
import ToDoContext from '../context/context'
const List = ({ item, handleRefresh, data }) => {
    const { initialValue, setEditStatus, setInitialValue, editStatus } = useContext(ToDoContext)

    const deleteData = async (id) => {
        try {
            await baseService.delete(`/todos/${id}`)
            handleRefresh()
        } catch (error) {
            console.log("delete error:", error);
        }
    }

    const changeStatus = async (id) => {
        try {
            const arr = data.find(x => x.id === id)
            arr.isCompleted = !arr.isCompleted

            await baseService.put(`/todos/${id}`, arr)
            console.log("change status success");
            handleRefresh()
        } catch (error) {
            console.log("changestatus error", error);
        }
    }

    const editContent = (item) => {
        setInitialValue(item)
        setEditStatus(false)
    }

    return (
        <div>
            <li style={{ backgroundColor: item.isCompleted ? "red" : "" }}>
                <span>{item.content}</span>
                <div className='li_elements'>
                    <div className='icons'>
                        {item.isCompleted ? <EditOffIcon /> :
                            <EditIcon onClick={() => editContent(item)} />}
                        <DeleteForeverIcon onClick={() => deleteData(item.id)} />
                        <AddTaskIcon onClick={() => changeStatus(item.id)} />
                    </div>
                </div>

            </li>

        </div>
    )
}

export default List
