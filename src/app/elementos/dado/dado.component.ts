import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss']
})
export class DadoComponent implements OnInit {
  valor!:number

  lanzar(){
    let i=7;

    while(i>6 || i==0){
      i=Math.trunc(Math.random()*10)
      this.valor=i
    }
  }
  ngOnInit(): void {
  }

}
