
import './styles/app.css'
import Header from "./Header";
import Create from './Create';
import List from './List';
import Options from './Options';

function App() {
  return (
    <div className="app light-bg">
      <div className="wrapper">
      <Header />
      <Create />
      <List />
      <Options />
      <p className='instruction'>Drag and drop to reorder list</p>
    </div>
      </div>

  );
}

export default App;
