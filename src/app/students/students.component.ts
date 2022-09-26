import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';

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
    @ViewChild(MatSort, { static: true }) sort!: MatSort;

    displayedColumns = ['id', 'name', 'email', 'registeredOn']

    dataSource = new PaginationDataSource<Student, StudentQuery>(
        (request: PageRequest<Student>, query: StudentQuery) => this.studentsService.page(request, query),
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
