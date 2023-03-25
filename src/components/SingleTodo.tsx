// model
import { Todo } from "../models/model"

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo