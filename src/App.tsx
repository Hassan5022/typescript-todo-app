// hook
import { useState } from "react";
// component
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
// style
import "./App.css";
// model
import { Todo } from "./models/model";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (todos && todo !== "") {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;
		if (!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		let add,
			active = todos,
			completed = completedTodos;

		if (source.droppableId === "TodoList") {
			add = active[source.index];
			active.splice(source.index, 1);
		} else {
			add = completed[source.index];
			completed.splice(source.index, 1);
		}

		if (destination.droppableId === "TodoList") {
			active.splice(destination.index, 0, add);
		} else {
			completed.splice(source.index, 0, add);
		}

		setCompletedTodos(completed);
		setTodos(active);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="App">
				<span className="heading">Todo List</span>
				<InputForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
				<TodoList
					todos={todos}
					setTodos={setTodos}
					completedTodos={completedTodos}
					setCompletedTodos={setCompletedTodos}
				/>
			</div>
		</DragDropContext>
	);
};

export default App;
