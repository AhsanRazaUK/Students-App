import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';
import { Sort } from '@angular/material';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css'],
    providers: [StudentService]
})
export class StudentListComponent implements OnInit {
    title = "Student List";
    studentList: Student[] = [];

    constructor(private studentService: StudentService) { }

    ngOnInit() {

        this.studentService.getStudents().subscribe((data: Student[]) => {
            this.studentList = data.slice();
        });
    }

    sortData(sort: Sort) {
        const data = this.studentList.slice();

        if (!sort.active || sort.direction === '') {
            this.studentList = data;
            return;
        }

        this.studentList = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'studentID': return compare(a.studentID, b.studentID, isAsc);
                case 'firstName': return compare(a.firstName, b.firstName, isAsc);
                case 'surname': return compare(a.surname, b.surname, isAsc);
                default: return 0;
            }
        });
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}