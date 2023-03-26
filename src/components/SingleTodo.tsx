// model
import { Todo } from "../models/model";
// style
import "./style.css";
// react icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
// hook
import { useEffect, useRef, useState } from "react";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);
		setEdit(false);
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	return (
		<form className="single-todo" onSubmit={(e) => handleEdit(e, todo.id)}>
			{edit ? (
				<input
					ref={inputRef}
					value={editTodo}
					onChange={(e) => setEditTodo(e.target.value)}
					className="single-todo-text"
				/>
			) : todo.isDone ? (
				<s className="single-todo-text">{todo.todo}</s>
			) : (
				<span className="single-todo-text">{todo.todo}</span>
			)}
			<div>
				<span
					className="icon"
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit(!edit);
						}
					}}
				>
					<AiFillEdit />
				</span>
				<span className="icon" onClick={() => handleDelete(todo.id)}>
					<AiFillDelete />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
