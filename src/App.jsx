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

  return (

    <div style={{
      minHeight: '100vh',
      backgroundColor: '#001f3f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '120px',
      boxSizing: 'border-box', 
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#f3e9dc',
        padding: '28px',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(134, 74, 46, 0.15)',
        border: '1px solid #d4c3b3'
      }}>

        <h2 style={{
          color: '#5c4033',
          textAlign: 'center',
          marginTop: 0,
          marginBottom: '20px',
          fontSize: '24px',
          fontWeight: '700'
        }}>
          📝 My To-Do List App
        </h2>

        <form onSubmit={addTodo} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #c2b280',
              backgroundColor: '#faf6f0',
              color: '#683931',
              outline: 'none',
              fontSize: '14px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 18px',
              backgroundColor: '#5e392c',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Add
          </button>
        </form>

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
                backgroundColor: '#faf6f0',
                borderRadius: '8px',
                border: '1px solid #e6ccb2'
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#a1887f' : '#7c4c44',
                  cursor: 'pointer',
                  fontSize: '15px'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: '#866747',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {
          
        }
        <p style={{
          margin: '20px 0 0 0',
          paddingTop: '12px',
          borderTop: '1px dashed #d4c3b3',
          textAlign: 'center',
          color: '#8d6e63',
          fontSize: '11px',
          letterSpacing: '1px',
          fontWeight: '600',
          textTransform: 'uppercase'
        }}>

        </p>

      </div>
    </div>
  );
}

export default App;