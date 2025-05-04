import goalsImage from './assets/goals.jpg';
import Header from './components/Header';
import { useState } from 'react';
import { CourseGoalList } from './models/types/CourseGoalList';
import CourseGoal from './components/CourseGoal';
import NewGoal from './components/NewGoal';

export default function App() {
  const [goals, setGoals] = useState<CourseGoalList[]>([]);

  function handleAddGoal(goal: string, description: string) {
    setGoals((previousGoals) => {
      const newGoal: CourseGoalList = {
        id: Math.random(),
        title: goal,
        description: description,
      };

      return [...previousGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((previousGoals) => previousGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <div style={{ marginTop: 10 }}>
        <CourseGoal goals={goals} onDelete={handleDeleteGoal} />
      </div>
    </main>
  );
}
