import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string): Observable <any>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get( url );
  }

}
