import {useState} from 'react'
import '../styles/app.css'
import Header from "./Header";
import Create from './Create';
import List from './List';
import Options from './Options';
import {v1 as uuidv1 } from 'uuid'

const importedData = [
  {
  id: 1,
  text: 'Do this, do that',
  isActive: true} ,
  {
   id: 2,
  text: 'Do that and grind, then do that',
  isActive: true} ,
  {
   id: 3,
  text: 'Grind. grind grind',
  isActive: false} ,
  {
  id: 4,
  text: 'You know, grind',
  isActive: false} ,
]
function App() {
  const [isDark, setIsDark] = useState(true);
  const [data, setData] = useState(importedData);
  const [filter, setFilter] = useState('all')
  const filterHandler = (string)=>{
      setFilter(string)
  }
  const deleteHandler = (id)=> {
    let changedData = data.filter((elem)=> {
      return !(elem.id === id)
    })
    setData(changedData)
  }
  const clearComplete = () => {
    let changedData = data.filter((elem)=> {
      return (elem.isActive)
    })
    setData(changedData)
  }
  const isActiveHandler = (id)=> {
    let changedData = data.map((elem)=> {
      if (elem.id === id) {
        elem.isActive = !elem.isActive
        return (elem)
      }
      return elem
    })
    setData(changedData)
 }
 const createItem = (value)=> {
       let newItem = {
          id: uuidv1(),
          text: value,
          isActive: true,
       }
       setData([...data, newItem])
 }
  return (
    <div className={"app "+(isDark?"dark-bg":"light-bg")}>
      <div className="wrapper">
      <Header isDark={isDark} themeSwitcher={setIsDark}/>
      <Create isDark={isDark} createItem ={createItem}/>
      <List filter={filter} data={data} isDark={isDark} isActiveHandler={isActiveHandler} deleteHandler = {deleteHandler} clearClickHandler={clearComplete}/>
      <Options isDark={isDark} filter={filter} setFilter={filterHandler}/>
      <p className='instruction'>Click Sun and Moon Icon to Change Theme</p>
    </div>
      </div>

  );
}

export default App;
