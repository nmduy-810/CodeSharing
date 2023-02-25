import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models';
import { environment } from 'src/environments/environment';
import { UtilitiesService } from './utilities.service';
import { ApiResponse } from '../interfaces/result.type';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {

    private _sharedHeaders = new HttpHeaders();

    constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<User[]>>(`${environment.apiUrl}/api/users`, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<User[]>) => { return response.data; }), catchError(this.handleError));
    }

    getDetail(id: any) {
        return this.http.get<ApiResponse<User>>(`${environment.apiUrl}/api/users/${id}`, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<User>) => { return response.data; }), catchError(this.handleError));
    }

    add(entity: User) {
        return this.http.post(`${environment.apiUrl}/api/users`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<User>) => { return response.data; }), catchError(this.handleError));
    }

    update(id: string, entity: User) {
        return this.http.put(`${environment.apiUrl}/api/users/${id}`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<User>) => { return response.data; }), catchError(this.handleError));
    }

    delete(id: string) {
        return this.http.delete(environment.apiUrl + '/api/users/' + id, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<User>) => { return response.data; }), catchError(this.handleError));
    }

    getMenuByUser(userId: string) {
        return this.http.get<ApiResponse<Function[]>>(`${environment.apiUrl}/api/users/${userId}/menu`, { headers: this._sharedHeaders })
            .pipe(map(response => {
                const functions = this.utilitiesService.UnflatteringForLeftMenu(response.data);
                return functions;
            }), catchError(this.handleError));
    }

    getUserRoles(userId: string) {
        return this.http.get<ApiResponse<string[]>>(`${environment.apiUrl}/api/users/${userId}/roles`, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<string[]>) => { return response.data; }), catchError(this.handleError));
    }

    removeRolesFromUser(id: string, roleNames: string[]) {
        let rolesQuery = '';
        for (const roleName of roleNames) {
            rolesQuery += 'roleNames' + '=' + roleName + '&';
        }

        return this.http.delete(environment.apiUrl + '/api/users/' + id + '/roles?' + rolesQuery, { headers: this._sharedHeaders })
            .pipe(map((response: ApiResponse<User>) => { return response.data; }), catchError(this.handleError));
    }

    assignRolesToUser(userId: string, assignRolesToUser: any) {
        return this.http.post(`${environment.apiUrl}/api/users/${userId}/roles`,
            JSON.stringify(assignRolesToUser), { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

}