import TodoApi from "../apis/todo"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { TODO_KEY } from "./qureyKey";
import useAddTodo from "../hooks/quries/add-todo";
import useGetTodo from "../hooks/quries/get-todo";
import { Skeleton } from "@chakra-ui/react";

const Todo =() => {
    const queryClient = useQueryClient();
    const { data: todos, isError, isLoading, error, refetch } = useGetTodo()

    const { mutate: addTodoMutate, mutateAsync: addTodoMutation } = useAddTodo()
    // react-query로 받아온 데이터는 자체만으로 state이기 때문에
    // useState로 받을 필요가 없습니다.
    // queyClient의 setQueryDate로 수정할 수 있다
    const onSetQuery = () => {
      refetch()
      // queryClient.setQueryData([TODO_KEY.GET_TODO], (prev) => {
      //   console.log(prev)
      //   return [
      //     ...prev,
      //     {}
      //   ]
      // })
    }

  const onSubmitAddTodo = async(e) => {
    e.preventDefault();
    const { title, content } = e.target
    console.log(title.value, content.value)
    await addTodoMutation({title: title.value, content: content.value})
    // refetch()
    queryClient.invalidateQueries(TODO_KEY.GET_TODO)
    // 캐싱 되어있는 데이터를 유효하지 않은 상태로 변경
  }
  
  if(isLoading) {
    return <Skeleton height="80px" width="300px"/>
  }

  return (
    <div>
      {todos.data.map((el) => <div key={el.id}>{el.title}</div>)}
      <form onSubmit={onSubmitAddTodo}>
        <input name="title"/>
        <textarea name="content"/>
        <button>추가</button>
      </form>
      <button onClick={onSetQuery}>셋</button>
    </div>
  )
}
export default Todo