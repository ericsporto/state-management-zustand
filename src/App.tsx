import { useEffect } from 'react';
import AddPeople from './components/input/AddPeople';
import People from './components/people/People';
import useDarkModeStore from './service/darkModeStore';
import useStore from './service/peopleStore';

function App() {
  const people = useStore((state) => state.people);
  const toogleDarkMode = useDarkModeStore((state) => state.toogleDarkMode);
  const dark = useDarkModeStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div>
      <button onClick={toogleDarkMode}>Toogle Dark Mode</button>
      <h1>We have {people.length} peoples in our store!</h1>
      <AddPeople />
      <People people={people} />
    </div>
  );
}

export default App;
