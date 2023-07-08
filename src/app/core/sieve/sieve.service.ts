import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageRequest, Sort } from "../pagination-datasource/page";

@Injectable({ providedIn: 'root' })
export class SieveService {

    getHttpParamsForSieve<T>(request: PageRequest<T>, filters: string): HttpParams {
        const sorts = this.getSort(request.sort);

        return new HttpParams()
            .set('page', request.page + 1)
            .set('pageSize', request.size)
            .set('sorts', sorts)
            .set('filters', filters);
    }

    escapeForSieve(search: string): string {
        if (search == "null") return "\\null";

        let result = search;

        result = result.replace(",", "\\,");
        result = result.replace("|", "\\|");

        return result;
    }

    private getSort<T>(sort: Sort<T> | undefined): string {
        if (sort == undefined || sort.property == undefined) return "";

        const sign = sort.order == "desc" ? "-" : "";

        return sign + sort.property.toString();
    }

}
