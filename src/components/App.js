import {useState} from 'react'
import '../styles/app.css'
import Header from "./Header";
import Create from './Create';
import List from './List';
import Options from './Options';

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
  const isActiveHandler = (id)=> {
    let changedData = data.map((elem)=> {
      if (elem.id === id) {
        elem.isActive = !elem.isActive
        return (elem)
      }
      return elem
    } )
    setData(changedData)
 }
  return (
    <div className={"app "+(isDark?"dark-bg":"light-bg")}>
      <div className="wrapper">
      <Header isDark={isDark} themeSwitcher={setIsDark}/>
      <Create isDark={isDark}/>
      <List data={data} isDark={isDark} isActiveHandler={isActiveHandler} />
      <Options isDark={isDark}/>
      <p className='instruction'>Click Sun and Moon Icon to Change Theme</p>
    </div>
      </div>

  );
}

export default App;
