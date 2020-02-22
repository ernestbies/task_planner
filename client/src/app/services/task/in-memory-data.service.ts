import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  task1: Task = {
    id: 0,
    taskName: 'Zadanie 1',
    taskDescription: 'Pierwsze przykładowe zadanie',
    taskType: 'A',
    tags: [{display: 'a', value: 'a'}, {display: 'b', value: 'b'}],
    category: 'Kategoria 1',
    createDate: '1.01.2019',
    createBy: 'Ernest',
    modifyDate: '1.01.2019',
    modifyBy: 'Ernest',
    deadlineFrom: '1/01/2019',
    deadlineTo: '2/02/2019',
    priority: 'niski',
    expectedTime: '2 h',
    resources: 'Zasoby',
    status: 0,
    order: 0
  }

  task2: Task = {
    id: 1,
    taskName: 'Zadanie 2',
    taskDescription: 'Drugie przykładowe zadanie',
    taskType: 'A',
    tags: [{display: 'c', value: 'c'}, {display: 'd', value: 'd'}],
    category: 'Kategoria 2',
    createDate: '1.01.2019',
    createBy: 'Ernest',
    modifyDate: '1.01.2019',
    modifyBy: 'Ernest',
    deadlineFrom: '3/01/2019',
    deadlineTo: '4/01/2019',
    priority: 'niski',
    expectedTime: '3 h',
    resources: 'Zasoby',
    status: 0,
    order: 1
  }

  task3: Task = {
    id: 2,
    taskName: 'Zadanie 3',
    taskDescription: 'Trzecie przykładowe zadanie',
    taskType: 'A',
    tags: [{display: 'e', value: 'e'}, {display: 'f', value: 'f'}],
    category: 'Kategoria 3',
    createDate: '1.01.2019',
    createBy: 'Ernest',
    modifyDate: '1.01.2019',
    modifyBy: 'Ernest',
    deadlineFrom: '5/01/2019',
    deadlineTo: '6/01/2019',
    priority: 'niski',
    expectedTime: '4 h',
    resources: 'Zasoby',
    status: 1,
    order: 0
  }

  createDb() {
    const tasks: Task[] = [
      this.task1,
      this.task2,
      this.task3
    ];

    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}
