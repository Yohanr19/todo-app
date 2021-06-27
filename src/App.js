
import './styles/app.css'
import Header from "./Header";
import iconCheck from './images/icon-check.svg'

function App() {
  return (
    <div className="app light-bg">
      <Header />
      <form className='create-todo'>
          <img src={iconCheck} className='check-create' alt='check'/>
          <label for='new-todo'></label>
          <input type='text'  id='new-todo' className='todo-input' required placeholder='Create a new todo...'></input>
      </form>
    </div>
  );
}

export default App;
