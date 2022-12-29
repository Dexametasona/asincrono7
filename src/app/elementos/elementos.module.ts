import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';



@NgModule({
  declarations: [
    DadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DadoComponent
  ]
})
export class ElementosModule { }
