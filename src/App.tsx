// hook
import { useState } from "react";
// component
import InputForm from "./components/InputForm";
// style
import "./App.css";
// model
import { Todo } from "./models/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (todos) {
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
