import { FormEvent, useRef } from 'react';
import { NewGoalProps } from '../models/interfaces/NewGoalProps';

function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const inputGoal = goal.current!.value.trim();
    const inputDescription = description.current!.value.trim();

    if (!inputGoal || !inputDescription) {
      alert('Please enter both a goal and a short description.');
      return;
    }

    event.currentTarget.reset();

    onAddGoal(inputGoal, inputDescription);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="description">Short Description</label>
        <input id="description" type="text" ref={description} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
