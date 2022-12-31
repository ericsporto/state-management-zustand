export interface PeopleProps {
  people: string[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  const x = 1;
  return (
    <div>
      {people.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default People;
