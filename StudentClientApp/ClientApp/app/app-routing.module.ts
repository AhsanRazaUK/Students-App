import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
    { path: '', component: StudentListComponent },
    { path: 'add-new-student', component: StudentDetailsComponent },
    { path: 'edit-student/:id', component: StudentDetailsComponent },
    { path: 'delete-student/:id', component: StudentDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]    
})
export class AppRoutingModule { }
