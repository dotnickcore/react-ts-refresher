import { ReactNode } from 'react';
import { CourseGoalProps } from '../models/interfaces/CourseGoalProps';
import CourseGoalDetails from './CourseGoalDetails';
import InfoBox from './InfoBox';

function CourseGoal({ goals, onDelete }: CourseGoalProps) {
  if (goals.length === 0) {
    <InfoBox mode="hint">
      You have no course goals yet. Start adding some
    </InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity='high'>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
}

export default CourseGoal;
