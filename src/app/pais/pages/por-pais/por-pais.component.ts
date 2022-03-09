import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
}) 

export class PorPaisComponent{
  
 termino: string = ""
 hayError: boolean = false;
 paises : Country[] = [];
 sugeridos: Country[] = [];
 mostrarSugeridos: boolean = false;

 constructor(private paisService: PaisService){}

 buscar(termino:string ){
   this.mostrarSugeridos=true;
   this.hayError=false;
   this.termino = termino;
   this.paisService.buscarPais(this.termino)
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
    this.buscar(termino.name.common);
 }

 cambiarSugerido(sugerido:boolean){
   this.mostrarSugeridos=sugerido;
 }
 
}
