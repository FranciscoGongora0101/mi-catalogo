import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from 'src/assets/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosServiceService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/300';
  private autosActionURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient) { }

  getAutos() : Observable<any>{
    return this.http.get<any>(this.autosURL)

  }

  updateAutos(auto: Automovil) : Observable<any>{
   return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto)
  }

  deleteAutos(auto: Automovil) : Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`)
   }

  addAutos(auto: Automovil) : Observable<any>{
    return this.http.post<any>(this.autosActionURL, auto)
   }
}
