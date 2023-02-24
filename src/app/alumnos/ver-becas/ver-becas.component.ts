import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BecasService } from 'src/app/services/becas.service';

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

@Component({
  selector: 'app-ver-becas',
  templateUrl: './ver-becas.component.html',
  styleUrls: ['./ver-becas.component.css']
})
export class VerBecasComponent {

  mostrarListaBecas = false;

  becas: BecaAlumno[] = [];
  becasLista: Beca [ ]= [];

  constructor(private route: ActivatedRoute,
              private becasService: BecasService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.becasService.getBecaStudent(id).subscribe(data => {
        this.becas = data;
      });
    });

    this.becasService.getAllBecas().subscribe(data => {
      this.becasLista = data;
    });
  }

  agregarBeca(){
    this.mostrarListaBecas = true;
  }

  eliminarBeca(){

  }


}