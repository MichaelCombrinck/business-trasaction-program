import { Injectable } from "@angular/core";
import { Task } from "../interfaces/task-interface";

@Injectable({
    providedIn: 'root'
  })
export class TaskService {
    public tasksList:Task[] = [];

    public addToTaskList(tasks: Task) {
        this.tasksList.push(tasks);
    }

    public getTasklist() {
        return this.tasksList;
    }

}