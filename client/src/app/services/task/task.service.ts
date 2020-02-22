import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'api/';

  constructor(private httpClient: HttpClient) { }

  // Get all tasks - GET
  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url + 'tasks');
  }

  // Get task by id - GET
  public getTaskById(id): Observable<Task> {
    return this.httpClient.get<Task>(this.url + 'tasks/' + id).pipe(catchError(this.handleError('getTaskById', {
      id: undefined,
      taskName: undefined,
      taskDescription: undefined,
      taskType: undefined,
      tags: [],
      category: undefined,
      createDate: undefined,
      createBy: undefined,
      modifyDate: undefined,
      modifyBy: undefined,
      deadlineFrom: undefined,
      deadlineTo: undefined,
      priority: undefined,
      expectedTime: undefined,
      resources: undefined,
      status: undefined,
      order: undefined})));
  }

  // Add task - POST
  addTask(task: Task) {
    return this.httpClient.post(this.url + 'tasks/', task).pipe(catchError(this.handleError('addTask')));
  }

  // Update task - PUT
  updateTask(task: Task) {
    return this.httpClient.put(this.url + 'tasks/', task).pipe(catchError(this.handleError('updateTask')));
  }

  // Delete task - DELETE
  deleteTask(id) {
    return this.httpClient.delete(this.url + 'tasks/' + id).pipe(catchError(this.handleError('deleteTask')));
  }


  // Handle error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
