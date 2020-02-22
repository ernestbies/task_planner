import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NbpResponse} from './NbpResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbpService {

  private url = 'http://api.nbp.pl/api/exchangerates/tables/';

  constructor(private http: HttpClient) { }

  getTable(name): Observable<NbpResponse[]> {
    return this.http.get<NbpResponse[]>(this.url + name + '?format=json');
  }

}
