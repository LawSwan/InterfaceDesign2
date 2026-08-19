import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState(['Learn React state', 'Practice hooks', 'Finish assessment'])

  const increment = () => setCount((current) => current + 1)
  const decrement = () => setCount((current) => (current > 0 ? current - 1 : 0))

  const handleAddTodo = (event) => {
    event.preventDefault()
    const trimmedTodo = todoInput.trim()

    if (!trimmedTodo) {
      return
    }

    setTodos((currentTodos) => [...currentTodos, trimmedTodo])
    setTodoInput('')
  }

  const removeTodo = (indexToRemove) => {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToRemove),
    )
  }

  return (
    <main className="app-shell">
      <h1>State and Hooks Assessment</h1>

      <section className="task-card">
        <h2>Task 1: Simple Counter</h2>
        <div className="counter-panel">
          <p className="count-display">Current count: {count}</p>
          <div className="button-row">
            <button type="button" onClick={decrement}>
              Decrement
            </button>
            <button type="button" onClick={increment}>
              Increment
            </button>
          </div>
        </div>
      </section>

      <section className="task-card">
        <h2>Task 2: Form Input</h2>
        <label className="input-label" htmlFor="message-input">
          Enter text
        </label>
        <input
          id="message-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type something here..."
        />
        <p className="output-text">Entered text: {text || 'Nothing typed yet'}</p>
      </section>

      <section className="task-card">
        <h2>Task 3: Todo List</h2>
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={(event) => setTodoInput(event.target.value)}
            placeholder="Add a new todo"
          />
          <button type="submit">Add Todo</button>
        </form>

        <ul className="todo-list">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <li key={`${todo}-${index}`} className="todo-item">
                <span>{todo}</span>
                <button type="button" onClick={() => removeTodo(index)}>
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li className="empty-state">No tasks yet</li>
          )}
        </ul>
      </section>
    </main>
  )
}

export default App
