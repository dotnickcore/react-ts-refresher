import { CourseGoalProps } from '../models/interfaces/CourseGoalProps';
import CourseGoalDetails from './CourseGoalDetails';

function CourseGoal({ goals, onDelete }: CourseGoalProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoalDetails
            id={goal.id}
            title={goal.title}
            onDelete={onDelete}
          >
            <p>{goal.description}</p>
          </CourseGoalDetails>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoal;
