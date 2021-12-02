import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo, editTodo } from "../actions/actions";
import Todo from "./Todo";
import "../App.css";

const Todos = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoList);
  const [todo, setTodo] = useState("");
  const [editTask, setEditTask] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTODO = () => {
    if (todo !== "") {
      dispatch(addNewTodo(todo));
      setTodo("");
    }
  };

  const editTaskfunc = (id, task) => {
    setEditTask(true);
    setTodo(task);
    setTaskId(id);
  };

  const editTaskDispacher = () => {
    dispatch(editTodo(taskId, todo));
    setTodo("");
    setEditTask(false);
  };

  const deleteTask = (id) => {
    if (editTask) {
      setTodo("");
      setEditTask(false);
    }
    dispatch(deleteTodo(id));
  };

  const getButton = () => {
    if (editTask) {
      return (
        <button onClick={() => editTaskDispacher()} className="add-btn">
          Edit Task
        </button>
      );
    } else {
      return (
        <button onClick={() => addTODO()} className="add-btn">
          Add Todo
        </button>
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add your todo task"
        value={todo}
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />

      {getButton()}
      {state.map((item) => {
        return (
          <Todo
            key={item.id}
            editTaskfunc={(id, task) => editTaskfunc(id, task)}
            task={item.item}
            id={item.id}
            deleteTask={() => deleteTask(item.id)}
          />
        );
      })}
    </div>
  );
};

export default Todos;
