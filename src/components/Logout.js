import React from 'react'
import { LogoutIcon } from '../icons/icons';
const Logout = ({setUser}) => {

    const logout = () => {
        setUser("")
      localStorage.removeItem("user")
      }
  return (
    <div>
       <LogoutIcon onClick={logout}  style={{fontSize:"4rem"}}/>
    </div>
  )
}

export default Logout
