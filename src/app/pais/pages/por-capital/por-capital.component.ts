import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: []
})
export class PorCapitalComponent  {

  termino: string = ""
  hayError: boolean = false;
  paises : Country[] = [];
  sugeridos : Country [] =[];
  mostrarSugeridos:boolean =false;


 constructor(private paisService: PaisService){}


  buscar(termino:string){
    this.mostrarSugeridos=true;
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino)
    this.paisService.buscarCapital(this.termino)
    .subscribe(paises=>{
                        this.paises=paises
                        this.sugeridos=paises.slice(0,3);
                       }
              ,error=>{
                        this.hayError=true;
                        this.paises=[];} );
  }
 
  sugerencias(termino:string){
     this.buscar(termino);
  }

  buscarSugerido(termino:Country){
    this.buscar(termino.capital[0]);
  }

  cambiarSugerido(sugerido:boolean){
    this.mostrarSugeridos=sugerido;
  }
}
