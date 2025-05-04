import { CourseGoalProps } from '../models/interfaces/CourseGoalProps';
import CourseGoalDetails from './CourseGoalDetails';

function CourseGoal({ goals }: CourseGoalProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoalDetails title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoalDetails>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoal;
