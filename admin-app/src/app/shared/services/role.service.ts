import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { Role } from '../models';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/result.type';


@Injectable({ providedIn: 'root' })
export class RolesService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<Role[]>>(`${environment.apiUrl}/api/roles`, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<Role[]>) => { return response.data; }), catchError(this.handleError));
    }

    getDetail(id) {
        return this.http.get<ApiResponse<Role>>(`${environment.apiUrl}/api/roles/${id}`, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<Role>) => { return response.data; }), catchError(this.handleError));
    }

    add(entity: Role) {
        return this.http.post(`${environment.apiUrl}/api/roles`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<Role>) => { return response.data; }), catchError(this.handleError));
    }

    update(id: string, entity: Role) {
        return this.http.put(`${environment.apiUrl}/api/roles/${id}`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<Role>) => { return response.data; }), catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(environment.apiUrl + '/api/roles/' + id, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<Role>) => { return response.data; }), catchError(this.handleError));
    }
}