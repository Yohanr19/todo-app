
import '../styles/app.css'
import Header from "./Header";
import Create from './Create';
import List from './List';
import Options from './Options';

const data = [
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
  return (
    <div className="app light-bg">
      <div className="wrapper">
      <Header />
      <Create />
      <List data={data}/>
      <Options />
      <p className='instruction'>Click Sun and Moon Icon to Change Theme</p>
    </div>
      </div>

  );
}

export default App;
