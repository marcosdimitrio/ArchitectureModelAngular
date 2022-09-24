import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Student } from "./models/student.model";
import { StudentQuery } from "../../students/shared/student-query";
import { PageRequest, Page } from "../../core/pagination-datasource/page";

@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor(private http: HttpClient) { }

    page(request: PageRequest<Student>, query: StudentQuery): Observable<Page<Student>> {
        return this.http.get<Page<Student>>('/api/students', {
            params: new HttpParams()
                .set('pageNumber', request.page)
                .set('pageSize', request.size)
            // .set('sortOrder', request.sort.order)
            // .set('sortProperty', request.sort.property)
            // ...query
        });
    }
}