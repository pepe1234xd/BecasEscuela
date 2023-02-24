import { Component } from '@angular/core';
import { BecasService } from '../../services/becas.service';

interface Students{
  id: number,
  name: string,
  age: number,
  gender: boolean
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  students: Students[] = [];

  constructor(private becasService: BecasService) { }

  ngOnInit() {
    this.becasService.getAll().subscribe(data => {
      this.students = data;
    });
  }

}
