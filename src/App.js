import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import Addtodo from './MyComponents/Addtodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let inittodo;
  if (localStorage.getItem('todos') == null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem('todos'));
  }

  const addTodo = (task, desc) => {
    console.log("Desc->", desc, "Title->", task);
    let no = 0;
    if (todos.length === 0) {
      no = 1
    } else {
      no = todos[todos.length - 1].no + 1;
    }

    const myTodo = {
      no: no,
      task: task,
      desc: desc
    }
    console.log("Desc->", myTodo);
    setTodos([...todos, myTodo]);
    // if (localStorage.getItem('todos')) {

    // }
  }

  const onDelete = (todo) => {
    console.log("I'm On delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }))

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  //when we don't want initial to does
  const [todos, setTodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  //for initail to dos
  // const [todos, setTodos] = useState([{
  //   no: 1,
  //   task: "Learn React",
  //   desc: "I've to learn react for creating one project on first time and deploy on git."
  // },
  // {
  //   no: 2,
  //   task: "Learn DSA",
  //   desc: "I've to learn DSA for creating and applying on various project."
  // },
  // {
  //   no: 3,
  //   task: "Create new project of reatc",
  //   desc: "For practicing the reatc i need to build a project"
  // }]);

  return (
    <>
      <Router>
        <Header title="My To Dos List" searchBar={false} />
        <Routes >
          <Route exact path="/" element={<><Addtodo addTodo={addTodo} /> <Todos todos={todos} onDelete={onDelete} /></>}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes >

        <Footer />
      </Router>
    </>
  );
}

export default App;
