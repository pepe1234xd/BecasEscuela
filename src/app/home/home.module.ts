import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IndexComponent
  ],exports:[
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule 
  ]
})
export class HomeModule { }