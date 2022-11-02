import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { isNullOrWhiteSpace } from "../../core/utils/string-utils";

import { Student } from "./models/student.model";
import { StudentQuery } from "../../students/shared/student-query";
import { PageRequest, Page, Sort } from "../../core/pagination-datasource/page";
import { SieveService } from "../../core/sieve/sieve.service";

@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor(
        private http: HttpClient,
        private sieveService: SieveService,
    ) { }

    get(request: PageRequest<Student>, query: StudentQuery): Observable<Page<Student>> {
        const filters = this.getFilters(query);
        const httpParams = this.sieveService.getHttpParamsForSieve(request, filters);

        return this.http.get<Page<Student>>('/api/students', {
            params: httpParams
        });
    }

    private getFilters(query: StudentQuery): string {
        if (isNullOrWhiteSpace(query.search)) return "";

        return "(name|email)@=" + this.sieveService.escapeForSieve(query.search);
    }

}