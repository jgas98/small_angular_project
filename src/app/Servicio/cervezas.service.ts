import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { Observable, of} from 'rxjs';

import { Beer } from '../Modelo/Beer';

@Injectable({providedIn: 'root'})

export class BeersService {

  datos: string = 'https://api.punkapi.com/v2/beers'; //DE UN JSON GIGANTE SACA LOS DATOS
  
  private cervezasFavoritas : Array <number> = []; 
  
  private cervezasSeleccionada: Beer;

  constructor (private http: HttpClient) {}

  //METODOS DE LAS CERVEZAS, AÑADIR CERVEZA A FAVORITOS, SELECCIONAR CERVEZA PARA VER SU INFORMACION.....
  
  sacarCervezas (page = 1, size = 5) {return this.http.get(this.datos + '?page=' + page + '&per_page=' + size)}

  sacarCervezasPorId (ids: string){ return this.http.get(this.datos + '?ids=' + ids)}

  sacarCervezasFavoritas() {return this.cervezasFavoritas;}

  public set cervezaSeleccionada (value: Beer) {this.cervezasSeleccionada = value;}

  anyadirCervezaFavorita (newBeerId: number){
    
    this.cervezasFavoritas.push(newBeerId);
    
    return this.cervezasFavoritas;
  
  }
  
  borrarCervezaFavorita (id: number) { //borrar cerveza favorita dado su id
    
    let index = this.cervezasFavoritas.indexOf(id);
    
    this.cervezasFavoritas.splice(index, 1);
    
    return this.cervezasFavoritas;
  
  }

  public sacarCervezaSimilar(): Observable<Beer[]> {return this.http.get<Beer[]>(this.datos + '/random');} //sacar cerveza aleatoria que se utilizara en popup.ts
  
  public get cervezaSeleccionada(): Beer {
    
    const selectedBeer = this.cervezasSeleccionada;
    
    return this.cervezasSeleccionada;
  
  }
  
  

}