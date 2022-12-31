import { useRef } from 'react';
import useStore from '../../service/peopleStore';

export default function AddPeople() {
  const inputRef = useRef<HTMLInputElement>(null);
  const addPeople = useStore((state) => state.addPerson);
  const addPerson = () => {
    addPeople(inputRef.current!.value);
    inputRef.current!.value = '';
  };
  return (
    <div>
      <input type="text" name="name" ref={inputRef} />
      <button onClick={addPerson}>Add People</button>
    </div>
  );
}
