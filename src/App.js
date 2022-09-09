import './App.css';
import AddTodo from './components/AddTodo';

import { useContext, useEffect, useState } from 'react';
import { baseService } from './network/services/baseServices';
import EditTodo from './components/EditTodo';
import List from './components/List'
import { LogoutIcon, NightsStayIcon } from './icons/icons';
import ToDoContext from './context/context';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(true)
  const [editStatus, setEditStatus] = useState(true)
  const {theme,setTheme} = useContext(ToDoContext)
 const  [user,setUser] = useState()
  useEffect(() => {
    getData()
   let data = localStorage.getItem("user")
    if(data){
      setUser(data)
    }
  }, [refresh])

  useEffect(() => {
    if(theme !== ""){
      localStorage.setItem("mode",theme)
    }
    console.log(theme);
    document.body.className=theme
      
  },[theme])

  const getData = async () => {
    try {
      const data = await baseService.get("/todos")
      setData(data)
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleRefresh = () => { setRefresh(prev => !prev) }
  
  const changeMode = () => {
     if(theme === "light-theme" || theme===""){
      setTheme("dark-theme")
      
     }else{
      setTheme("light-theme")
      localStorage.setItem("mode",theme)
     }
  }
 
  
  return (
    <>
    {user ?  
      <div className='body'>
       
    <div className="nightIcon"> <NightsStayIcon style={{fontSize:"4rem",color: theme==="light-theme"  ? "black" : "yellow"}} onClick={changeMode}/>
    <Logout setUser={setUser} />
    </div>
    <h1  style={{color:"red"}}>User: <span style={{color: theme==="light-theme"  ? "black" : "red"}}>{user}</span></h1>
     <EditTodo handleRefresh={handleRefresh} />
     <AddTodo handleRefresh={handleRefresh} />
     <div className='list'>
       <h1 style={{ marginLeft: "2rem" }}>Tasks</h1>
       
       <ul>
         {data.map((item, index) => (
           <List key={index} item={item} data={data} handleRefresh={handleRefresh} />
           ))}
       </ul>
     </div>

   </div> : <Login setUser={setUser} user={user}/>}
           </>
  );
}

export default App;
