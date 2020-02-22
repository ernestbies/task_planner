import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TaskFormComponent } from './task-form/task-form.component';
import {
  MatFormFieldModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatCheckboxModule, MatDialogModule, MatMenuModule, MatSidenavModule
} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NbpComponent } from './nbp/nbp.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/task/in-memory-data.service';
import { TasksComponent } from './tasks/tasks.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { TableDragAndDropComponent } from './table-drag-and-drop/table-drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    LoginComponent,
    RegisterComponent,
    TaskFormComponent,
    NbpComponent,
    TasksComponent,
    YesNoDialogComponent,
    TableDragAndDropComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    TagInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}
    ),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatDialogModule,
    DragDropModule,
    MatMenuModule,
    MatSidenavModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
