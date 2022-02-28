import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drug } from '../model/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  apiUrl: string = environment.apiUrl;
  // endPoint: string = 'akarmi';

  constructor(
    private https: HttpClient
  ) { }

  getAll(): Observable<Drug[]> {
    return this.https.get<Drug[]>(`${this.apiUrl}`)
  }
}
