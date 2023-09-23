import { axiosInstance } from "./core"

const PATH = '/todo'

const TodoApi = {
  async addTodo({title, content}){
    const res = await axiosInstance.post(PATH, {title, content})
    return res.data
  },

  async getTodo(){
    const res = await axiosInstance.get(PATH + "/123123")
    return res.data
  },

  async updatTodo({id, content, state}){
    const res = await axiosInstance.put(PATH + `/${id}`, {
      content,
      state
    })
    return res.data
  },
  // params URL /todo/3
  // qurey string /todo?todoId=3

  async deleteTodo({id}){
    // const res = await axiosInstance.delete(PATH, {
    //   params : {
    //     todoId: id
    //   }
    // })
    const res = await axiosInstance.delete(PATH + `/${id}`)
    return res.data
  }
}
export default TodoApi