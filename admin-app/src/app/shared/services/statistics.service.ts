import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MonthlyNewComment, MonthlyNewPost, MonthlyNewRegisterUser } from '../models';


@Injectable({ providedIn: 'root' })
export class StatisticsService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }
    getMonthlyNewComments(year: number) {
        return this.http.get<MonthlyNewComment[]>(`${environment.apiUrl}/api/statistics/monthly-new-comments?year=${year}`,
            { headers: this._sharedHeaders })
            .pipe(map((response: MonthlyNewComment[]) => {
                return response;
            }), catchError(this.handleError));
    }

    getMonthlyNewPosts(year: number) {
        return this.http.get<MonthlyNewPost[]>(`${environment.apiUrl}/api/statistics/monthly-new-posts?year=${year}`,
            { headers: this._sharedHeaders })
            .pipe(map((response: MonthlyNewPost[]) => {
                return response;
            }), catchError(this.handleError));
    }

    getMonthlyNewRegisterUsers(year: number) {
        return this.http.get<MonthlyNewRegisterUser[]>(`${environment.apiUrl}/api/statistics/monthly-new-registers?year=${year}`,
            { headers: this._sharedHeaders })
            .pipe(map((response: MonthlyNewRegisterUser[]) => {
                return response;
            }), catchError(this.handleError));
    }
}