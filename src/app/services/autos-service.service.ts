import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from 'src/assets/models';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosServiceService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/300';
  private autosActionURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  getAutos() : Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messagesServices.add('Autos Obtenidos'))
    )

  }

  updateAutos(auto: Automovil) : Observable<any>{
   return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto).pipe(
    catchError(this.handleError<any>('updateAutos')),
    tap((result)=> {
      console.log(result);
      this.messagesServices.add(`Auto actualizado con id: ${result.data._id}`)
  })
  )
  }

  deleteAutos(auto: Automovil) : Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap((result)=> {
        console.log(result);
        this.messagesServices.add(`Auto eliminado`)
    })
    )
   }

  addAutos(auto: Automovil) : Observable<any>{
    return this.http.post<any>(this.autosActionURL, auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result)=> {
        console.log(result);
        this.messagesServices.add(`Auto agregado con id: ${result.data._id}`)
    })
    )
   }

   private handleError<T>(operation = 'operacion', result?: T){
     return(error: any): Observable<T> =>{
       this.messagesServices.add(`${operation} fallo: ${error.message}`);
       return of(result as T);
     }
   }
}
