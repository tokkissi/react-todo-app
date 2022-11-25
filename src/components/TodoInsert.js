import { DiApple } from 'react-icons/di';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form action="" className="TodoInsert">
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">
        <DiApple></DiApple>
      </button>
    </form>
  );
};

export default TodoInsert;
