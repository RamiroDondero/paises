import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: [ './por-region.component.css']
})
export class PorRegionComponent {

 termino: string = ""
 hayError: boolean = false;
 regiones: string [] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
 paises : Country[] = [];

 constructor(private paisService: PaisService){}


 buscar(termino:string){
   this.paisService.buscarRegion(termino).subscribe(arrCountry=>this.paises=arrCountry);
 }
 
}
