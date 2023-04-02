// model
import { Todo } from "../models/model";
// component
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
// style
import "./style.css";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: Props) => {
	return (
		<div className="container">
			<Droppable droppableId="TodoList">
				{(provided) => (
					<div
						className="todos"
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todo-heading">Active Tasks</span>
						{todos.map((todo, index) => (
							<SingleTodo
								index={index}
								key={todo.id}
								todo={todo}
								todos={todos}
								setTodos={setTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId="TodosRemove">
				{(provided) => (
					<div
						className="todos remove"
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todo-heading">Completed Tasks</span>
						{completedTodos.map((todo, index) => (
							<SingleTodo
							index={index}
								key={todo.id}
								todo={todo}
								todos={completedTodos}
								setTodos={setCompletedTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
