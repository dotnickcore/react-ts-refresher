import { CourseGoalItem } from "../models/interfaces/CourseGoalItem";

function CourseGoal({ id, title, description }: CourseGoalItem) {
    return <article>
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div>
            <button>Delete</button>
        </div>
    </article>
}

export default CourseGoal;