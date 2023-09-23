import { useRecoilValue } from "recoil";
import { addModalAtom } from "../atoms/ui.atom";

const Example = () => {
  const isOpenAddModal = useRecoilValue(addModalAtom);
  // 오직 값만

  // const setIsOpenAddMdoal = useSetRecoilState(addModalAtom);
  // 오직 수정하는 부분만
  // setIsOpenAddMdoal()  

  return <div>
    {isOpenAddModal ? 'OPEN' : 'CLOSE'}
  </div>
}
export default Example
