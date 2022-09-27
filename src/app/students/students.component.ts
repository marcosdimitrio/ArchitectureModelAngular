import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { PageRequest } from '../core/pagination-datasource/page';
import { PaginationDataSource } from '../core/pagination-datasource/pagination-datasource';

import { Student } from './shared/models/student.model';
import { StudentQuery } from './shared/student-query';
import { StudentsService } from './shared/students.service';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
    displayedColumns = ['id', 'name', 'email', 'registeredOn']

    dataSource = new PaginationDataSource<Student, StudentQuery>(
        (request: PageRequest<Student>, query: StudentQuery) => this.studentsService.get(request, query),
        { property: 'name', order: 'asc' },
        { search: '', registeredOn: undefined }
    )

    constructor(private studentsService: StudentsService) { }

    sortBy({ active, direction }: Sort) {
        this.dataSource.sortBy({
            property: active as keyof Student,
            order: direction || 'asc'
        })
    }
}
