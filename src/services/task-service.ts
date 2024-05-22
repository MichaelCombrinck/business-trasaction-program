import { Task } from "../interfaces/task-interface";

export class TaskService {
    public tasksList:Task[] = [];


    public setTaskList(tasks: Task[]) {
        this.tasksList = tasks;
    }

    public getTasklist() {
        return this.tasksList;
    }

}