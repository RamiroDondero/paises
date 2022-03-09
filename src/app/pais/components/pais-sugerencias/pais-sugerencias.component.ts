import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-sugerencias',
  templateUrl: './pais-sugerencias.component.html',
  styleUrls: ['./pais-sugerencias.component.css']
})
export class PaisSugerenciasComponent   {
  
  @Input()  termino : string ='';
  
  @Input()  sugeridos : Country[]= [] 
  
  @Input()  mostrarSugerencias: boolean = false;

  @Output() onClick : EventEmitter<Country> = new EventEmitter();
  
  @Output() onSugerido: EventEmitter<boolean> = new EventEmitter();
  

  buscar( termino:Country){
    this.mostrarSugerencias= false;    
    this.onClick.emit(termino);
    this.onSugerido.emit(this.mostrarSugerencias)
  }

 

}
