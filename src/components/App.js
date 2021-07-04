import {useState, useEffect} from 'react'
import '../styles/app.css'
import Header from "./Header";
import Create from './Create';
import List from './List';
import Options from './Options';
import {v1 as uuidv1 } from 'uuid'

function App() {
  const serverUrl = 'http://127.0.0.1:3001'
  const [isDark, setIsDark] = useState(true);
  const [data, setData] = useState('loading');
  const [filter, setFilter] = useState('all')
  useEffect( ()=>{
    getData()    
   }, [])

  const filterHandler = (string)=>{
      setFilter(string)
  }
  const deleteHandler = async (id)=> {
    await fetch(`${serverUrl}/api/todo`,{method:'DELETE', body: JSON.stringify(id)}).then((response) =>{
      response.json().then(json =>{ 
          setData(json);
        })
      }).catch(error=> console.log(error))
  }
  const clearCompleted = async () => {
    await fetch(`${serverUrl}/api/todo`,{method:'DELETE', body: JSON.stringify('completed')}).then((response) =>{
      response.json().then(json =>{ 
          setData(json);
        })
      }).catch(error=> console.log(error))
  }
  const isActiveHandler = async (id)=> {
    await fetch(`${serverUrl}/api/todo`,{method:'PUT', body: JSON.stringify(id)}).then((response) =>{
      response.json().then(json =>{ 
          setData(json);
        })
      }).catch(error=> console.log(error))
 }
 const getData= async ()=> {
    await fetch(`${serverUrl}/api/todo`, {method: 'GET'}).then((response) =>{
      response.json().then(json =>{ 
          setData(json);
        })
      }).catch(error => {
        console.log(error)
      }) 
 }
 const postItem = async (body)=>{
    await fetch(`${serverUrl}/api/todo`, {method: 'POST', body: JSON.stringify(body)}).then((response) =>{
      response.json().then(json =>{ 
          setData(json);
        })
      }).catch(error => console.log(error))
 }

 const createItem = (value)=> {
       let newItem = {
          id: uuidv1(),
          text: value,
          isActive: true,
       }
      postItem(newItem);
 }
  return (
    <div className={"app "+(isDark?"dark-bg":"light-bg")}>
      <div className="wrapper">
      <Header isDark={isDark} themeSwitcher={setIsDark}/>
      <Create isDark={isDark} createItem ={createItem}/>
      {(data === 'loading')||<List 
      filter={filter} 
      data={data} 
      isDark={isDark} 
      isActiveHandler={isActiveHandler} 
      deleteHandler = {deleteHandler} 
      clearClickHandler={clearCompleted}/>}
      <Options isDark={isDark} filter={filter} setFilter={filterHandler}/>
      <p className='instruction'>Click Sun and Moon Icon to Change Theme</p>
    </div>
      </div>

  );
}

export default App;
