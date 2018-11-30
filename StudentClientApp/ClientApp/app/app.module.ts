import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './shared/student.service';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { MatNativeDateModule, MatSortModule, MatTableModule, MatProgressSpinnerModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        StudentListComponent,
        StudentDetailsComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, BrowserAnimationsModule, MatNativeDateModule
    ],
    providers: [StudentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
