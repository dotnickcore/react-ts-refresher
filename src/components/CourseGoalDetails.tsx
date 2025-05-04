import { type PropsWithChildren } from "react";
import { CourseGoalDetailsProps } from "../models/interfaces/CourseGoalDetailsProps";

function CourseGoalDetails({ title, id, children, onDelete }: PropsWithChildren<CourseGoalDetailsProps>) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    </article>
}

export default CourseGoalDetails;