import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
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
        return this.http.get<Post[]>(`${environment.apiUrl}/api/posts`, { headers: this._headers })
            .pipe(map((response: Post[]) => {
                return response;
            }), catchError(this.handleError));
    }

    getById(id: any) {
        return this.http.get<Post>(`${environment.apiUrl}/api/posts/${id}`, { headers: this._headers })
            .pipe(catchError(this.handleError));
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