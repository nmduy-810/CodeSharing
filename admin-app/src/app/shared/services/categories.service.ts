import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../models';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/result.type';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<Category[]>>(`${environment.apiUrl}/api/categories`, { headers: this._headers })
            .pipe(map((response: ApiResponse<Category[]>) => { return response.data; }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<ApiResponse<Category>>(`${environment.apiUrl}/api/categories/${id}`, { headers: this._headers })
            .pipe(map((response: ApiResponse<Category>) => { return response.data; }), catchError(this.handleError));
    }

    add(request: Category) {
        return this.http.post(`${environment.apiUrl}/api/categories`, JSON.stringify(request),  { headers: this._headers })
            .pipe(map((response: ApiResponse<Category>) => { return response.data; }), catchError(this.handleError));
    }

    update(id: number, request: Category) {
        return this.http.put(`${environment.apiUrl}/api/categories/${id}`, JSON.stringify(request), { headers: this._headers })
            .pipe(map((response: ApiResponse<Category>) => { return response.data; }), catchError(this.handleError));
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + '/api/categories/' + id, { headers: this._headers })
            .pipe(map((response: ApiResponse<Category>) => { return response.data; }), catchError(this.handleError));
    }
}