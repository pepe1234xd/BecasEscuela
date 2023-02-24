import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Students{
    id: number,
    name: string,
    age: number,
    gender: boolean
}

interface BecaAlumno {
  id: number;
  idAlumno: number;
  alumno: {
    id: number;
    name: string;
    gender: boolean;
    age: number;
  };
  idBecas: number;
  beca: {
    id: number;
    name: string;
  };
}

interface Beca {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BecasService {

  private apiUrl:string="https://localhost:7272/";

  constructor(private http:HttpClient) {}

  getAll():Observable<Students[]>{
    return this.http.get<Students[]>(this.apiUrl + 'Student');
  }

  getBecaStudent(idAlumno: number):Observable<BecaAlumno[]>{
    const apiUrl = `${this.apiUrl}AlumnosBecas?id=${idAlumno}`;
    return this.http.get<BecaAlumno[]>(apiUrl);
  }

  getAllBecas():Observable<Beca[]>{
    return this.http.get<Beca[]>(this.apiUrl + 'Becas');
  }
  
}

