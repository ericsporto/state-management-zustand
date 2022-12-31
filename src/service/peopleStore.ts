import create from 'zustand';

export interface PeopleProps {
  people: string[];
  addPerson: (person: string) => void;
}

const useStore = create<PeopleProps>((set) => ({
  people: [],
  addPerson: (person: string) =>
    set((state) => ({ people: [...state.people, person] })),
}));

export default useStore;
