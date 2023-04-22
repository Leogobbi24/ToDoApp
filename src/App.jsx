import './assets/custom.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState } from "react";

export default function App() {

	const [todos, setTodos] = useState([
		{id: 1, text: "Clean and sanitize bathrooms", done: false },
		{id: 2, text: "Wash floors and vacuum", done: false },
		{id: 3, text: "Clean kitchen surfaces and appliances", done: false },
		{id: 4, text: "Wash dishes and put them away", done: false },
		{id: 5, text: "Clean windows and curtains", done: false },
		{id: 6, text: "Empty trash and recycle waste.", done: false },
	]);

	return (
		<div className="app">
			<div className="appBox">
				<h1>My To Do List</h1>

				<AddTodo setTodos={setTodos} />
				<TodoList todos={todos} setTodos={setTodos}/>
			</div>
		</div>
	)
}

