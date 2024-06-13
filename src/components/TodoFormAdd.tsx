import { useState } from 'react';

interface ToDoFormAddProps {
	addTodo: (task: string) => void;
}

export default function ToDoFormAdd({
	addTodo,
}: ToDoFormAddProps): JSX.Element {
	const [task, setTask] = useState('');

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTask(e.target.value);
	}
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		addTodo(task);
		setTask('');
	}

	return (
		<form className="TodoFormAdd" onSubmit={handleSubmit}>
			<input
				type="text"
				name="task"
				id="task"
				placeholder="Enter Task"
				value={task}
				onChange={handleInputChange}
			/>
			<button>Add Task</button>
		</form>
	);
}
