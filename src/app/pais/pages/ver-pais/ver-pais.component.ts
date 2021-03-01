import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Country ;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id))
    )
    .subscribe(
      resp => {
        console.log(resp);
      }      
    )

    // this.activateRoute.params.subscribe(
    //   ({ id }) => {
    //     console.log(id);
    //     this.paisService.getPaisPorAlpha(id).subscribe(
    //       pais => {
    //         console.log(pais);
    //         this.pais = pais;
    //       }
    //     )
    //   })    
  }

}
