import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Student } from './student.model';

@Injectable()

export class StudentService {
    apiUrl: string = 'http://localhost:4525/api/students';
    selectedStudent: Observable<Student>;
    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

    getStudent(id: number): Observable<Student> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Student>(url);
    }

    saveStudent(student: Student): Observable<Student> {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        const params = new HttpParams().set('id', student.studentID.toString());

        var body = {
            FirstName: student.firstName,
            Surname: student.surname,
            StudentID: student.studentID
        }

        if (student.studentID === 0) {            
            // Add New Record
            return this.http.post<Student>(`${this.apiUrl}`, body, {
                headers
            });
        }
        else {
            // Edit Record
            return this.http.put<Student>(`${this.apiUrl}/${student.studentID}`, body, {
                headers,
                params
            });
        }
    }

    deleteStudent(id: number): Observable<Student> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<Student>(url);
    }

}
