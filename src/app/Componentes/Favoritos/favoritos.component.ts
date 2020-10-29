import { Component, OnInit} from '@angular/core';

import { Beer } from '../../Modelo/Beer';

import { BeersService } from '../../Servicio/cervezas.service';

import { MatDialog } from '@angular/material';

import { DetailsPopupComponent } from '../Popup/popup.component'

@Component({
  
  selector: 'app-favourite-cards',
  
  templateUrl: './favoritos.component.html',
  
  styleUrls: ['./favoritos.component.css']

})

export class FavouriteCardsComponent implements OnInit {

  public listaCervezasFavoritas: Array<number> = [];
  
  public favouriteBeers: Array <Beer> = [];
  
  public cerveza: Beer;

  public cargarCervezas: Boolean = false;

  constructor(
    
    private servicioCervezas: BeersService,
    
    private popUp: MatDialog ) { 
  
    }

 ngOnInit() {this.sacarCervezasFavoritas(); }

 sacarCervezasFavoritas() { 
  
  this.listaCervezasFavoritas = this.servicioCervezas.sacarCervezasFavoritas(); 

  this.cargarCervezas = true;
  
  this.servicioCervezas.sacarCervezasPorId(this.listaCervezasFavoritas.join("|")).subscribe( 
    
    (response: any)=>{
    
      response.map((beer: Beer) => {
    
        beer.isFavourite = true;
    
        return beer;
    
      })
      
      this.favouriteBeers = response;
      
      this.cargarCervezas = false;
    
    }, (error)=>{
      
      alert("No se han podido cargar la lista de cervezas") 
      
      this.cargarCervezas = false;
    
    }
  
    )}

borrarCervezaFavorita (beer: Beer, index){  
  
  this.listaCervezasFavoritas = this.servicioCervezas.borrarCervezaFavorita(beer.id);
  
  this.favouriteBeers.splice(index, 1);

}

abrirPopup (beer: any)  {
  
  this.servicioCervezas.cervezaSeleccionada = this.cerveza;
  
  const popUpRef = this.popUp.open(DetailsPopupComponent, {width: '60%', data: beer});
}
}
