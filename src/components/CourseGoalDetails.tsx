import { type PropsWithChildren } from "react";
import { CourseGoalDetailsProps } from "../models/interfaces/CourseGoalDetailsProps";

function CourseGoalDetails({ title, children }: PropsWithChildren<CourseGoalDetailsProps>) {
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

export default CourseGoalDetails;