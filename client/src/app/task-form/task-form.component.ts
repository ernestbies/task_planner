import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../services/task/task.service';
import {Task} from '../services/task/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  private taskLen: number;
  private taskForm: FormGroup;
  private options: string[] = ['Typ 1', 'Typ 2', 'Typ 3'];
  private categoryOptions: string[] = ['Kategoria 1', 'Kategoria 2', 'Kategoria 3'];
  private priorities: string[] = ['niski', 'średni', 'wysoki'];
  private tags = [
    {display: 'C++', value: 1},
    {display: 'Java', value: 2},
    {display: 'Angular', value: 3}];
  private length = {
    'small': 255,
    'medium': 512,
    'long': 1024
  };

  myId;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
    this.taskForm = fb.group({
      id: new FormControl('', Validators.required),
      taskName: new FormControl('', Validators.compose([Validators.maxLength(this.length.medium), Validators.required])),
      taskDescription: new FormControl(''),
      taskType: new FormControl('', Validators.maxLength(this.length.medium)),
      tags: new FormControl(this.tags, Validators.maxLength(this.length.medium)),
      category: new FormControl('', Validators.maxLength(this.length.medium)),
      createDate: new FormControl(new Date().toLocaleDateString()),
      createBy: new FormControl('Ernest'),
      modifyDate: new FormControl(new Date().toLocaleDateString()),
      modifyBy: new FormControl('Ernest'),
      deadlineFrom: new FormControl(new Date('')),
      deadlineTo: new FormControl(new Date('')),
      priority: new FormControl(''),
      expectedTime: new FormControl(''),
      resources: new FormControl('')
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params['par'] === 'add') {
        console.log('Formularz dodawania nowego zadania');
        this.taskService.getTasks().subscribe((res)=> {
          this.router.navigate(['task/add'], {queryParams: {id: res.length}});
          this.taskLen = res.length;
          this.taskForm.patchValue({
            id: this.taskLen
          })
        })
      } else if (params['par'] === 'edit') {
        this.route.queryParams.subscribe((res)=> {
          this.taskService.getTasks().subscribe((result)=> {
            this.taskLen = result.length;
            if(res.id >= 0 && res.id < result.length) {
              this.router.navigate(['task/edit'], {queryParams: {id: res.id}});
              console.log('Formularz edycji zadania, id zadania: ', res.id);
              this.getTaskById(res.id);
            }else {
              this.router.navigate(['task/edit'], {queryParams: {id: result.length-1}});
              this.getTaskById(result.length-1);
            }
          });
        })
      } else {
        console.log('Podano zły parametr... Przekierowuję do strony startowej');
        this.router.navigate(['']);
      }
    });
  }

  onSumbit() {
    console.log(this.taskForm.value);
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data) => {
      console.log('Lista zadań, które są przechowywane w bazie: ');
      console.log(data);
    });
  }

  getTaskById(id) {
    let len = 0;
    this.taskService.getTasks().subscribe((res)=> {
      len = res.length;
    });
    this.taskService.getTaskById(id).subscribe(tsk => {
      console.log('Zadanie ID:', id, tsk);
      if(id >= 0 && id < len) {
        this.router.navigate(['task/edit'], {queryParams: {id: id}});
        this.taskForm.patchValue({
          id: id,
          taskName: tsk.taskName,
          taskDescription: tsk.taskDescription,
          taskType: tsk.taskType,
          tags: tsk.tags,
          category: tsk.category,
          createDate: tsk.createDate,
          createBy: tsk.createBy,
          modifyDate: tsk.modifyDate,
          modifyBy: tsk.modifyBy,
          deadlineFrom: new Date(tsk.deadlineFrom),
          deadlineTo: new Date(tsk.deadlineTo),
          priority: tsk.priority,
          expectedTime: tsk.expectedTime,
          resources: tsk.resources,
        });
      } else {
        alert('Podano nieprawidłową wartość!');
      }
    });
  }

  updateTask() {
    const updatedTask: Task = {
      id: Number(this.taskForm.get('id').value),
      taskName: this.taskForm.get('taskName').value,
      taskDescription: this.taskForm.get('taskDescription').value,
      taskType: this.taskForm.get('taskType').value,
      tags: this.taskForm.get('tags').value,
      category: this.taskForm.get('category').value,
      createDate: this.taskForm.get('createDate').value,
      createBy: this.taskForm.get('createBy').value,
      modifyDate: this.taskForm.get('modifyDate').value,
      modifyBy: this.taskForm.get('modifyBy').value,
      deadlineFrom: this.taskForm.get('deadlineFrom').value,
      deadlineTo: this.taskForm.get('deadlineTo').value,
      priority: this.taskForm.get('priority').value,
      expectedTime: this.taskForm.get('expectedTime').value,
      resources: this.taskForm.get('resources').value,
      status: 0,
      order: Number(this.taskForm.get('id').value + 1)
    };
    this.taskService.updateTask(updatedTask).subscribe();
  }

  addTask() {
    const addedTask: Task = {
      id: Number(this.taskForm.get('id').value),
      taskName: this.taskForm.get('taskName').value,
      taskDescription: this.taskForm.get('taskDescription').value,
      taskType: this.taskForm.get('taskType').value,
      tags: this.taskForm.get('tags').value,
      category: this.taskForm.get('category').value,
      createDate: this.taskForm.get('createDate').value,
      createBy: this.taskForm.get('createBy').value,
      modifyDate: this.taskForm.get('modifyDate').value,
      modifyBy: this.taskForm.get('modifyBy').value,
      deadlineFrom: new Date(this.taskForm.get('deadlineFrom').value).toLocaleDateString().split('.').join('/'),
      deadlineTo: new Date(this.taskForm.get('deadlineTo').value).toLocaleDateString().split('.').join('/'),
      priority: this.taskForm.get('priority').value,
      expectedTime: this.taskForm.get('expectedTime').value,
      resources: this.taskForm.get('resources').value,
      status: 0,
      order: this.taskForm.value.length + 1
    };
    this.taskService.addTask(addedTask).subscribe((res) => {
      console.log('Added task: ', res);
    });
    this.taskService.getTasks().subscribe((res)=> {
      this.router.navigate(['task/add'], {queryParams: {id: res.length}});
      this.taskLen = res.length;
      this.taskForm.patchValue({
        id: this.taskLen
      })
    });
  }

}
