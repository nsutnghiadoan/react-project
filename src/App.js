import './assets/css/style.scss'
import 'react-router-dom'
import Navbar from './components/Navbar';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/first-project" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todo" element={<Todo />} />
        </Routes>
      </div>
  );
}

export default App;
