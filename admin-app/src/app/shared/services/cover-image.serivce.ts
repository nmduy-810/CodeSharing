import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/result.type';
import { CoverImage } from '../models/cover-image.model';

@Injectable({ providedIn: 'root' })
export class CoverImageService extends BaseService {

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._headers = this._headers.set('Content-Type', 'application/json');
    }

    get() {
        return this.http.get<ApiResponse<CoverImage[]>>(`${environment.apiUrl}/api/coverimages`, { headers: this._headers })
            .pipe(map((response: ApiResponse<CoverImage[]>) => { return response.data; }), catchError(this.handleError));
    }
}