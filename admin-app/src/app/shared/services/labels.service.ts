import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Label } from '../models';

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
        return this.http.get<Label[]>(`${environment.apiUrl}/api/labels`, httpOptions)
            .pipe(catchError(this.handleError));
    }
}