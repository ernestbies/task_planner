import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {TaskFormComponent} from './task-form/task-form.component';
import {RegisterComponent} from './register/register.component';
import {NbpComponent} from './nbp/nbp.component';
import {TasksComponent} from './tasks/tasks.component';
import {TableDragAndDropComponent} from './table-drag-and-drop/table-drag-and-drop.component';
import {AuthorComponent} from './author/author.component';

const routes: Routes = [
  { path: '', redirectTo: './app.component', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'task/:par', component: TaskFormComponent},
  { path: 'nbp', component: NbpComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'tasklist', component: TableDragAndDropComponent},
  { path: 'author', component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
