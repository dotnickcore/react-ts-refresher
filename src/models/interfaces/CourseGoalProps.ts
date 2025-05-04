import { CourseGoalList } from "../types/CourseGoalList";

export interface CourseGoalProps {
    goals: CourseGoalList[];
    onDelete: (id: number) => void;
};