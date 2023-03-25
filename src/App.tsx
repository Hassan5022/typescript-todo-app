// hook
import { useState } from "react";
// component
import InputForm from "./components/InputForm";
// style
import "./App.css";
// model
import { Todo } from "./models/model";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("object");
	};

	return (
		<div className="App">
			<span className="heading">Todo List</span>
			<InputForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
		</div>
	);
};

export default App;
