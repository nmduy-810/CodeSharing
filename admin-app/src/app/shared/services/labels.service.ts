import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Label } from '../models';
import { ApiResponse } from '../interfaces/result.type';

@Injectable({ providedIn: 'root' })
export class LabelsService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }
    get() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get<ApiResponse<Label[]>>(`${environment.apiUrl}/api/labels`, httpOptions)
            .pipe(map((response: ApiResponse<Label[]>) => { return response.data; }), catchError(this.handleError));
    }
}