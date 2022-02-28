import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;
  // endPoint: string = 'cars';

  constructor(
    private https: HttpClient
  ) { }

  getAll(): Observable<Car[]> {
    return this.https.get<Car[]>(`${this.apiUrl}`)
  }

  get(id: number): Observable<Car> {
    return this.https.get<Car>(`${this.apiUrl}/${id}`)
  }

  update(car: Car): Observable<Car> {
    //patch csak azokat az adatokat fogja frissíteni, amiket elküldtem. A put viszont a teljes adatot felülírja, ha nem küldöm ujra, vagy üres adatot küldök, akko törlődik az adatsor.
    return this.https.patch<Car>(
      `${this.apiUrl}/${car.id}`, car);
  }

  create(Car: Car): Observable<Car> {
    return this.https.post<Car>(`${this.apiUrl}/${car.id}`, car);
  }
  delete(id: number): Observable<any> {
    return this.https.delete<any>(`${this.apiUrl}/${id}`);
  }

}
