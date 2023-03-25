// model
import { Todo } from "../models/model";
// component
import SingleTodo from "./SingleTodo";
// style
import './style.css'

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
      <div className="todos">
          {todos.map(todo => (
              <SingleTodo
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
              />
          ))}
    </div>
  )
}

export default TodoList