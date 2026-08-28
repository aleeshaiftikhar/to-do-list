import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#001f3f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '460px',
        backgroundColor: '#f5a623', 
        padding: '32px 28px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
        textAlign: 'center'
      }}>

        {

        }
        <h2 style={{
          color: '#000000',
          textAlign: 'center',
          marginTop: 0,
          marginBottom: '24px',
          fontSize: '28px',
          fontWeight: '800'
        }}>
          To-Do List
        </h2>

        {

        }
        <form onSubmit={addTodo} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task..."
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#ffffff',
              color: '#333333',
              outline: 'none',
              fontSize: '14px'
            }}
          />

          <button
            type="submit"
            style={{
              padding: '10px 18px',
              backgroundColor: '#007bff', 
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            Add
          </button>

          <button
            type="button"
            onClick={clearAll}
            style={{
              padding: '10px 16px',
              backgroundColor: '#e63946', 
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            Clear All
          </button>
        </form>

        {/* List Items */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888888' : '#222222',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '500'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;