import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursoComponent],
  exports: [
  CursoComponent
  ]
})
export class CursoModule { }
