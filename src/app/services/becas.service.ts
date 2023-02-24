import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Students{
    id: number,
    name: string,
    age: number,
    gender: boolean
}

@Injectable({
  providedIn: 'root'
})
export class BecasService {

  private apiUrl:string="https://localhost:7272/";

  constructor(private http:HttpClient) {}

  getAll():Observable<Students[]>{
    return this.http.get<Students[]>(this.apiUrl + 'Student');;
  }
}

