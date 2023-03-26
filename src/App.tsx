// hook
import { useState } from "react";
// component
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
// style
import "./App.css";
// model
import { Todo } from "./models/model";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (todos && todo !== "") {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	return (
		<div className="App">
			<span className="heading">Todo List</span>
			<InputForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
