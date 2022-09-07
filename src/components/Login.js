import React, { useContext, useState } from 'react'


const Login = ({setUser,user}) => {
    const [value,setValue] = useState("")
    
    

const handleClick = () => {
   setUser(value)
   localStorage.setItem("user", value)
}
  return (
    <div className='Home'>
      <div className=' login'>
                <label>Username</label>
                <input type="text"
                    placeholder='Please enter a username'
                    onChange={(e) => setValue(e.target.value)}
                    />
                <button onClick={handleClick}>LOGIN</button>

            </div>
    </div>
  )
}

export default Login
