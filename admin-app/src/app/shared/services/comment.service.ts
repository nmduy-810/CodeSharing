import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Comment } from '../models';

@Injectable({ providedIn: 'root' })
export class CommentsService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<Comment[]>(`${environment.apiUrl}/api/posts/comments/all`, { headers: this._sharedHeaders })
            .pipe(map((response: Comment[]) => { return response; }), catchError(this.handleError));
    }

    getDetail(postId, commentId) {
        return this.http.get<Comment>(`${environment.apiUrl}/api/posts/${postId}/comments/${commentId}`, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getCommentsByPostId(postId) {
        return this.http.get<Comment>(`${environment.apiUrl}/api/posts/${postId}/comments`, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }
  
    delete(postId, commentId) {
        return this.http.delete(environment.apiUrl + '/api/posts/' + postId + '/comments/' + commentId, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }
}