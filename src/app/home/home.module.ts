import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],exports:[
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ]
})
export class HomeModule { }