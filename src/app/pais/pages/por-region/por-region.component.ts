import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
   `
   button{      
      margin: 5px;
    }
    ` 
    
  ]
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country [] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  activarRegion( region:string ) {

    if(region === this.regionActiva) {return; }

    this.regionActiva = region;
    this.hayError = false;
    this.paises=[];
    //TODO: hacer llamada al servicio
    this.paisService.buscarRegion(this.regionActiva).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err)=> {
        this.hayError = true;
        this.paises = [];
      }
    )   

  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

 

}
