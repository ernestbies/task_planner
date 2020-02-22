import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../services/task/task.service';
import {Task} from '../services/task/task';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {YesNoDialogComponent} from '../yes-no-dialog/yes-no-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  totalHrs = 0;
  taskList: Task[];
  columnsToDisplay = ['select', 'taskName', 'taskType', 'priority', 'deadlineFrom', 'deadlineTo', 'expectedTime', 'category', 'createDate', 'createBy', 'status', 'action'];
  dataSource: MatTableDataSource<Task>;
  selection = new SelectionModel<Task>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private taskService: TaskService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(data => {
        this.taskList = data;
        this.totalHrs = this.taskList.map(t => t.expectedTime).reduce((acc, val) => acc + parseFloat(val), 0);
        this.dataSource = new MatTableDataSource(this.taskList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, property) => {
          if (property.includes('.')) { return property.split('.').reduce( (o, i) => o[i], item)}
          return item[property];
        };

        // Wyświetlenie listy zadań w konsoli
        console.log('Lista zadań, które są przechowywane w bazie: ');
        console.log(this.taskList);
      },
      (error) => {
        console.log('Error: ' + error);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  totalHours() {
    return this.totalHrs + ' h';
  }


  delete() {
    const tempTask = this.selection.selected;
    tempTask.map((item) => {
      this.taskService.deleteTask(item.id).subscribe(() => {
        console.log('Usuwam zadanie o ID:', item.id);
        this.selection.deselect(item);
      });
    });
    this.getTasks();
  }

  action(value) {
    switch (value) {
      case 'none':
        console.log('Nie wybrano żadnej opcji');
        break;
      case 'delete':
        this.actionDelete();
        break;
    }
  }

  goToAddTask(){
    this.router.navigate(['task/add']);
  }

  actionDelete() {
    this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: {
        title: 'Usuń',
        content: 'Czy jesteś pewny, że chcesz usunąć listę zadanń?',
        onPositiveClick: () => {this.delete(); }
      }
    });
  }

  deleteTask(row) {
    this.selection.select(row);
    this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: {
        title: 'Usuń',
        content: 'Czy jesteś pewny, że chcesz usunąć zadanie?',
        onPositiveClick: () => this.taskService.deleteTask(row.id)
          .subscribe(() => {
            this.getTasks();
            this.selection.deselect(row);
          }),
      }
    });
  }

  editTask(row) {
    console.log(row);
    this.router.navigate(['task/' + row.id]);
  }
}
