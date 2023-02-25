import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Contact } from '../models';
import { ApiResponse } from '../interfaces/result.type';

@Injectable({ providedIn: 'root' })
export class ContactsService extends BaseService {

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<Contact[]>>(`${environment.apiUrl}/api/contacts`, { headers: this._headers })
            .pipe(map((response: ApiResponse<Contact[]>) => { return response.data; }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<ApiResponse<Contact>>(`${environment.apiUrl}/api/contacts/${id}`, { headers: this._headers })
        .pipe(map((response: ApiResponse<Contact>) => { return response.data; }), catchError(this.handleError));
    }

    update(id: number, request: Contact) {
        return this.http.put(`${environment.apiUrl}/api/contacts/${id}`, JSON.stringify(request), { headers: this._headers })
            .pipe(map((response: ApiResponse<Contact>) => { return response.data; }), catchError(this.handleError));
    }
}