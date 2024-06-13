import { useState } from 'react';

interface TodoFormEditProps {
	task: string;
	handleEdit: (task: string) => void;
}

export default function TodoFormEdit({
	task: prevTask,
	handleEdit,
}: TodoFormEditProps): JSX.Element {
	const [task, setTask] = useState<string>(prevTask);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTask(e.target!.value);
	}
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		handleEdit(task);
		setTask('');
	}

	return (
		<form className="TodoFormEdit" onSubmit={handleSubmit}>
			<input
				type="text"
				name="task"
				id="task"
				value={task}
				onChange={handleInputChange}
			/>
		</form>
	);
}
