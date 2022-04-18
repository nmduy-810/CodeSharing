import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../models';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<Category[]>(`${environment.apiUrl}/api/categories`, { headers: this._headers })
            .pipe(map((response: Category[]) => { return response; }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<Category>(`${environment.apiUrl}/api/categories/${id}`, { headers: this._headers })
            .pipe(catchError(this.handleError));
    }

    add(request: Category) {
        return this.http.post(`${environment.apiUrl}/api/categories`, JSON.stringify(request),  { headers: this._headers })
            .pipe(catchError(this.handleError));
    }

    update(id: number, request: Category) {
        return this.http.put(`${environment.apiUrl}/api/categories/${id}`, JSON.stringify(request), { headers: this._headers })
            .pipe(catchError(this.handleError));
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + '/api/categories/' + id, { headers: this._headers })
            .pipe(catchError(this.handleError));
    }
}