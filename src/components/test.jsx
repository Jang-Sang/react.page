import { useRecoilState } from "recoil"
import { addModalAtom } from "../atoms/ui.atom"
import { useQuery } from "@tanstack/react-query";
import TodoApi from "../apis/todo";

const Test = () => {
  const {data } = useQuery(["getTodo"], TodoApi.getTodo, {
    staleTime: 1000 * 60 * 4
  })
  console.log(data)


  const [isOpenAddModal, setIsOpenAddModal] = useRecoilState(addModalAtom);
  
  const onToggledState = () => {
    setIsOpenAddModal((prev) => !prev)
  }

  return <div>
    {isOpenAddModal && <div>ADD</div>}
    <button onClick={onToggledState}>토글</button>
  </div>
}
export default Test