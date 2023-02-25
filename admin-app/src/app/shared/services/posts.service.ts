import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../interfaces/result.type";
import { Post } from "../models/post.model";
import { BaseService } from "./base.service";


@Injectable({ providedIn: 'root' })
export class PostsService extends BaseService {
    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<Post[]>>(`${environment.apiUrl}/api/posts`, { headers: this._headers })
            .pipe(map((response: ApiResponse<Post[]>) => { return response.data; }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<ApiResponse<Post>>(`${environment.apiUrl}/api/posts/${id}`, { headers: this._headers })
            .pipe(map((response: ApiResponse<Post>) => { return response.data; }), catchError(this.handleError));
    }

    getLatest() {
        return this.http.get<ApiResponse<Post[]>>(`${environment.apiUrl}/api/posts/latest/5`, { headers: this._headers })
            .pipe(map((response: ApiResponse<Post[]>) => { return response.data; }), catchError(this.handleError));
    }

    add(formData: FormData) {
        return this.http.post(`${environment.apiUrl}/api/posts`, formData,
            {
                reportProgress: true,
                observe: 'events'
            }).pipe(catchError(this.handleError));
    }

    update(id: any, formData: FormData) {
        return this.http.put(`${environment.apiUrl}/api/posts/${id}`, formData,
            {
                reportProgress: true,
                observe: 'events'
            }).pipe(catchError(this.handleError));
    }

    delete(id: any) {
        return this.http.delete(environment.apiUrl + '/api/posts/' + id, { headers: this._headers })
            .pipe(
                catchError(this.handleError)
            );
    }
}