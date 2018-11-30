import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: []
})
export class StudentDetailsComponent implements OnInit {
    title: string;
    deleteRecord: boolean = false;
    @Input() student: Student;
    constructor(
        private studentService: StudentService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.GetStudent();
    }

    GetStudent(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(this.route.snapshot.url[0].path);
        console.log(id);
        if (id == 0) {
            this.title = "Add New Student";
            this.student = new Student();
            this.student.studentID = 0;
        }
        else {
            if (this.route.snapshot.url[0].path.includes('delete')) {
                this.deleteRecord = true;
            }

            this.studentService.getStudent(id).subscribe((data: Student) => {
                this.student = data;
                this.title = "Student Details";
            });
        }
    }

    GoBack(): void {
        this.location.back();
    }

    Save(): void {
        this.studentService.saveStudent(this.student)
            .subscribe(() => this.GoBack());
    }

    Delete(): void {
        if (confirm('Would you like to delete this record?')) {
            this.studentService.deleteStudent(this.student.studentID)
                .subscribe(() => this.GoBack());
        } 
    }
}
