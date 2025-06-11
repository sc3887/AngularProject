import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // הוספת ה- ReactiveFormsModule
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { RegistrantListComponent } from './components/registrant-list/registrant-list.component';
import { RegistrantDetailsComponent } from './components/registrant-details/registrant-details.component';
import { AuthGuard } from './components/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { ModuleRegistry } from 'ag-grid-community';
// import { ClientSideRowModelModule } from 'ag-grid-community/client-side-row-model';
// import { SetFilterModule } from 'ag-grid-community/set-filter';
// import { MenuModule } from 'ag-grid-community/menu';
// import { ColumnsToolPanelModule } from 'ag-grid-community/column-tool-panel';
// import { FiltersToolPanelModule } from 'ag-grid-community/filter-tool-panel';

// ModuleRegistry.registerModules([
//   ClientSideRowModelModule,
//   SetFilterModule,
//   MenuModule,
//   ColumnsToolPanelModule,
//   FiltersToolPanelModule
// ]);


ModuleRegistry.registerModules(
  [ClientSideRowModelModule,
]);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'lessons', component: LessonListComponent, canActivate: [AuthGuard] },
  {path: 'lessons/:id', component: LessonDetailsComponent, canActivate: [AuthGuard] },
  { path: 'registrations', component: RegistrantListComponent, canActivate: [AuthGuard] },
  { path: 'registrations/:id', component: RegistrantDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LessonListComponent,
    LessonDetailsComponent,
    RegistrantListComponent,
    RegistrantDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
