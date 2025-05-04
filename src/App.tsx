import goalsImage from './assets/goals.jpg';
import Header from './components/Header';
import { useState } from 'react';
import { CourseGoalList } from './models/types/CourseGoalList';
import CourseGoal from './components/CourseGoal';

export default function App() {
  const [goals, setGoals] = useState<CourseGoalList[]>([]);

  function handleAddGoal() {
    setGoals((previousGoals) => {
      const newGoal: CourseGoalList = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in Depth',
      };

      return [...previousGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <div style={{ marginTop: 10 }}>
        <CourseGoal goals={goals} />
      </div>
    </main>
  );
}
