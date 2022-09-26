import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { isNullOrWhiteSpace } from "../../core/utils/string-utils";

import { Student } from "./models/student.model";
import { StudentQuery } from "../../students/shared/student-query";
import { PageRequest, Page, Sort } from "../../core/pagination-datasource/page";

@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor(private http: HttpClient) { }

    page(request: PageRequest<Student>, query: StudentQuery): Observable<Page<Student>> {
        const httpParams = this.getHttpParamsForSieve(request, query);

        return this.http.get<Page<Student>>('/api/students', {
            params: httpParams
        });
    }

    getHttpParamsForSieve(request: PageRequest<Student>, query: StudentQuery): HttpParams {
        const sorts = this.getSort(request.sort);
        const filters = this.getFilters(query);

        return new HttpParams()
            .set('page', request.page)
            .set('pageSize', request.size)
            .set('sorts', sorts)
            .set('filters', filters);
    }

    private getFilters(query: StudentQuery): string {
        if (isNullOrWhiteSpace(query.search)) return "";

        return "(name|email)@=" + this.escape(query.search);
    }

    private escape(search: string): string {
        if (search == "null") return "\\null";

        let result = search;

        result = result.replace(",", "\\,");
        result = result.replace("|", "\\|");

        return result;
    }

    private getSort(sort: Sort<Student> | undefined): string {
        if (sort == undefined || sort.property == undefined) return "";

        const sign = sort.order == "desc" ? "-" : "";

        return sign + sort.property;
    }

}