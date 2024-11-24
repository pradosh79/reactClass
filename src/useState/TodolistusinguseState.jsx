import React, { useState, useEffect } from 'react';

export default function TodoApp() {

    const [newTodo, setNewTodo] = useState('');

  // Initialize state with an empty array or the data from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i!== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/**
 * import React, { useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const deleteItem = () => {
    if (items.length > 0) {
      console.log(items.length, "hhh");
      const updatedItems = items.slice(0, items.length - 1);
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <ul>
        {Array.isArray(items) && items.map((item, index) => <li>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Item</button>
      {items.length > 0 && <button onClick={deleteItem}>Delete Item</button>}
    </div>
  );
}
 */