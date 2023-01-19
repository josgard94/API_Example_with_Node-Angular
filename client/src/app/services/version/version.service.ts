import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private API_URL = environment?.API_URL; 
  constructor(private http: HttpClient) { }

  public getVersion(): Observable<any | void>{
    let module = "version";
    return this.http.get<any>(this.API_URL+module).pipe(
      map((res: any) => {
        return res
      }),
      catchError((res, err ) => this.handlerError(res, err))
    );
  }
  private handlerError(res: any, err: any){
    let errorMessage = "Ocurrio un error al obtener la versión";
    if(res){
      errorMessage = `Error: ${res.error.message}`
    }
    return throwError(errorMessage);
  }
}
