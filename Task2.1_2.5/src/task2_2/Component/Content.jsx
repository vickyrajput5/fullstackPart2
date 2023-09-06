import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

export default Content;
