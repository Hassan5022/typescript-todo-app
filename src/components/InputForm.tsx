// hook
import { useRef } from "react";
// style
import "./style.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: React.FormEvent) => void;
}

const InputForm = ({ todo, setTodo, handleSubmit }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className="input-form"
			onSubmit={(e) => {
				handleSubmit(e);
				inputRef.current?.blur();
			}}
		>
			<input
				type="text"
				ref={inputRef}
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
