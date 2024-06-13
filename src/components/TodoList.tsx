import { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoFormAdd from './TodoFormAdd';
import '../styles/TodoList.css';

interface Todo {
	id: number;
	task: string;
	done: boolean;
}

export default function TodoList(): JSX.Element {
	const [todos, setTodos] = useState<Todo[]>(
		JSON.parse(localStorage.getItem('todoList') || '[]')
	);

	function addTodo(task) {
		const newTodo = { id: Date.now(), task, done: false };
		setTodos([...todos, newTodo]);
	}
	function removeTodo(id) {
		const newTodos = todos.filter((todo) => todo.id != id);
		setTodos(newTodos);
	}
	function toggleDone(id) {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, done: !todo.done } : todo
		);
		setTodos(updatedTodos);
	}
	function editTodo(id, task) {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, task } : todo
		);
		setTodos(updatedTodos);
	}
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="TodoList">
			<h1>Todo List</h1>
			<TodoFormAdd addTodo={addTodo} />

			{todos.map((todo) => (
				<Todo
					key={todo.id}
					id={todo.id}
					task={todo.task}
					done={todo.done}
					removeTodo={removeTodo}
					toggleDone={toggleDone}
					editTodo={editTodo}
				/>
			))}
		</div>
	);
}
