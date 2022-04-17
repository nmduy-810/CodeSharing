import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../models';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {

    private _refreshRequired = new Subject<void>();

    get RefreshRequired() {
        return this._refreshRequired;
    }

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    getCategories() {
        return this.http.get<Category[]>(`${environment.apiUrl}/api/categories`, { headers: this._headers })
            .pipe(map((response: Category[]) => { return response; }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<Category>(`${environment.apiUrl}/api/categories/${id}`, { headers: this._headers })
            .pipe(catchError(this.handleError));
    }

    postCategory(request: Category) {
        return this.http.post(`${environment.apiUrl}/api/categories`, JSON.stringify(request),  { headers: this._headers })
            .pipe(catchError(this.handleError));
    }

    putCategory(id: number, request: Category) {
        return this.http.put(`${environment.apiUrl}/api/categories/${id}`, JSON.stringify(request), { headers: this._headers })
            .pipe(tap(() => {
                this._refreshRequired.next();
            }), catchError(this.handleError));
    }

    deleteCategory(id: number) {
        return this.http.delete(environment.apiUrl + '/api/categories/' + id, { headers: this._headers })
            .pipe(catchError(this.handleError));
    }
}