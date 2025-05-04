import { type PropsWithChildren } from "react";
import { CourseGoalProps } from "../models/interfaces/CourseGoalProps";

function CourseGoal({ title, children }: PropsWithChildren<CourseGoalProps>) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <div>
            <button>Delete</button>
        </div>
    </article>
}

export default CourseGoal;