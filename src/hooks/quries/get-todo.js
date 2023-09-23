import { useQuery } from "@tanstack/react-query"
import { TODO_KEY } from "../../components/qureyKey"
import TodoApi from "../../apis/todo"

const useGetTodo = (opt) => {
  return useQuery([TODO_KEY.GET_TODO], TodoApi.getTodo, {
    staleTime: 1000 * 60 * 4,
    // suspense: true,
    // suspesne를 사용하기 위해서는 true, isLoading 값을 통해 로딩 화면을 처리하려면
    // 삭제해야한다.
    ...opt
  })
}
export default useGetTodo