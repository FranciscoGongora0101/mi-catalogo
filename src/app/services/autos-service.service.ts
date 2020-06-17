import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from 'src/assets/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosServiceService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos'
  constructor(private http: HttpClient) { }

  getAutos() : Observable<any>{
    return this.http.get<any>(this.autosURL)

  }
}
