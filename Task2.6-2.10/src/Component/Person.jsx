import React from 'react';

const Person = ({ filteredPersons}) => {
  return (
    <ul>
    {filteredPersons.map((person) => (
      <li key={person.id}>
        {person.name} - {person.number}
      </li>
    ))}
  </ul>
  );
};

export default Person;
