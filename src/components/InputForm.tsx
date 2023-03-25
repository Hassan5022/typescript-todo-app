// style
import "./style.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: React.FormEvent) => void;
}

const InputForm = ({ todo, setTodo, handleSubmit }: Props) => {
	return (
		<form className="input-form" onSubmit={handleSubmit}>
			<input
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Enter a task"
				className="input-field"
			/>
			<button className="input-button">Go</button>
		</form>
	);
};

export default InputForm;
