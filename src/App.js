
import './styles/app.css'
import Header from "./Header";
import Create from './Create';
import List from './List';


function App() {
  return (
    <div className="app light-bg">
      <Header />
      <Create />
      <List />
    </div>
  );
}

export default App;
