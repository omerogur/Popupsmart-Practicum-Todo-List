import React, { useContext } from 'react'
import ToDoContext from '../context/context';
import { LogoutIcon } from '../icons/icons';
const Logout = ({setUser}) => {

  const {theme} = useContext(ToDoContext)

    const logout = () => {
        setUser("")
      localStorage.removeItem("user")
      }
  return (
    <div>
       <LogoutIcon onClick={logout}  style={{fontSize:"4rem",color: theme==="light-theme"  ? "black" : "yellow"}}/>
    </div>
  )
}

export default Logout
