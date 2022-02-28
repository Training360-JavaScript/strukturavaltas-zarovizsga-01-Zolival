import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl: string = environment.apiUrl;
  // endPoint: string = 'constructions';

  constructor(
    private https: HttpClient
  ) { }

  getAll(): Observable<Construction[]> {
    return this.https.get<Construction[]>(`${this.apiUrl}`)
  }

  get(id: number): Observable<Construction> {
    return this.https.get<Construction>(`${this.apiUrl}/${id}`)
  }

  update(construction: Construction): Observable<Construction> {
    //patch csak azokat az adatokat fogja frissíteni, amiket elküldtem. A put viszont a teljes adatot felülírja, ha nem küldöm ujra, vagy üres adatot küldök, akko törlődik az adatsor.
    return this.https.patch<Construction>(
      `${this.apiUrl}/${construction.id}`, construction);
  }

  create(construction: Construction): Observable<Construction> {
    return this.https.post<Construction>(`${this.apiUrl}/${construction.id}`, construction);
  }
  delete(id: number): Observable<any> {
    return this.https.delete<any>(`${this.apiUrl}/${id}`);
  }


}
