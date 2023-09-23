import { useMutation } from "@tanstack/react-query"
import TodoApi from "../../apis/todo"

const useAddTodo = () => {
  return useMutation((todo) => TodoApi.addTodo(todo), {
    onSuccess: () => {
      alert("할 일이 등록 되었습니다!")
    }
  })
}
export default useAddTodo