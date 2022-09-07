import { createContext, useEffect, useState } from "react";


const ToDoContext = createContext(null)

export const ToDoProvider = ({ children }) => {
    const [initialValue, setInitialValue] = useState({})
    const [editStatus, setEditStatus] = useState(true)
    const [theme,setTheme] = useState("")
    const values = {
        initialValue, setInitialValue, editStatus, setEditStatus,theme,setTheme
    }
  
    useEffect(() => {
        console.log("context");
       let data = localStorage.getItem("mode")
     setTheme(data || "light-theme")
    },[])

    return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>
}

export default ToDoContext;
