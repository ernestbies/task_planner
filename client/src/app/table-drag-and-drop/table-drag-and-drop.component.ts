import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TaskService} from '../services/task/task.service';
import {Task} from '../services/task/task';

@Component({
  selector: 'app-table-drag-and-drop',
  templateUrl: './table-drag-and-drop.component.html',
  styleUrls: ['./table-drag-and-drop.component.css'],
  providers: [TaskService]
})
export class TableDragAndDropComponent implements OnInit {

  private zadaniaToDo: Task[] = [];
  private zadaniaDone: Task[] = [];
  private status;

  constructor(private ts: TaskService) { }

  ngOnInit(){
    console.log('Wczytuje zadania...');
    this.ts.getTasks().subscribe((res)=>{
      res.map((zadanie)=> {
        if(zadanie.status === 0) {
          this.zadaniaToDo.push(zadanie);
        }else {
          this.zadaniaDone.push(zadanie);
        }
      })
    })
  }

  //Drag and Drop
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    if(event.container.id === 'list-2') {
      this.status = 1;
    } else {
      this.status = 0;
    }

    let tsk: Task = {
      id: event.container.data[event.currentIndex].id,
      taskName: event.container.data[event.currentIndex].taskName,
      taskDescription: event.container.data[event.currentIndex].taskDescription,
      taskType: event.container.data[event.currentIndex].taskType,
      tags: event.container.data[event.currentIndex].tags,
      category: event.container.data[event.currentIndex].category,
      createDate: event.container.data[event.currentIndex].createDate,
      createBy: event.container.data[event.currentIndex].createBy,
      modifyDate: event.container.data[event.currentIndex].modifyDate,
      modifyBy: event.container.data[event.currentIndex].modifyBy,
      deadlineFrom: event.container.data[event.currentIndex].deadlineFrom,
      deadlineTo: event.container.data[event.currentIndex].deadlineTo,
      priority: event.container.data[event.currentIndex].priority,
      expectedTime: event.container.data[event.currentIndex].expectedTime,
      resources: event.container.data[event.currentIndex].resources,
      status: this.status,
      order:  event.currentIndex
    };

    this.ts.updateTask(tsk).subscribe();
  }

  showZadania() {
    console.log('Zadania do realizacji:', this.zadaniaToDo);
    console.log('Zadania zrealizowane:', this.zadaniaDone);
  }
}
