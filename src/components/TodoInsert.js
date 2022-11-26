import { useCallback, useState } from 'react';
import { DiApple } from 'react-icons/di';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form action="" onSubmit={onSubmit} className="TodoInsert">
      <input
        value={value}
        type="text"
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <DiApple></DiApple>
      </button>
    </form>
  );
};

export default TodoInsert;
