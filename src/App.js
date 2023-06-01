
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Todo from "./components/todo";
import CreateTodo from "./components/createTodo";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}>
                <Route path="todo" element={<Todo/>}/>
                <Route path="create" element={<CreateTodo/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
