import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { About } from '../models';
import { ApiResponse } from '../interfaces/result.type';

@Injectable({ providedIn: 'root' })
export class AboutsService extends BaseService {

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<About[]>>(`${environment.apiUrl}/api/abouts`, { headers: this._headers })
            .pipe(map((response: ApiResponse<About[]>) => { return response.data; }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<ApiResponse<About>>(`${environment.apiUrl}/api/abouts/${id}`, { headers: this._headers })
            .pipe(map((response: ApiResponse<About>) => { return response.data; }), catchError(this.handleError));
    }

    add(formData: FormData) {
        return this.http.post(`${environment.apiUrl}/api/abouts`, formData,
            {
                reportProgress: true,
                observe: 'events'
            }).pipe(catchError(this.handleError));
    }

    update(id: any, formData: FormData) {
        return this.http.put(`${environment.apiUrl}/api/abouts/${id}`, formData,
            {
                reportProgress: true,
                observe: 'events'
            }).pipe(catchError(this.handleError));
    }
}