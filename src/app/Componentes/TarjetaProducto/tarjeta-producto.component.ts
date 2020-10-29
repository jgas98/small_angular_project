import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Beer } from 'src/app/Modelo/Beer';

import { BeersService } from '../../Servicio/cervezas.service';

import { MatDialog } from '@angular/material';

import { DetailsPopupComponent } from '../Popup/popup.component'

@Component({
  
  selector: 'app-home-cards',
  
  templateUrl: './tarjeta-producto.component.html',
  
  styleUrls: ['./tarjeta-producto.component.css']

}) 

export class HomeCardsComponent implements OnInit {

  public beers: Array <Beer> = [];
  
  private page: number = 1;
  
  private tamanyo: number = 24;

  public cerveza: Beer;

  constructor(
    
    private servicioCervezas: BeersService,
    
    private popUp: MatDialog
  
  ) {}

    
  ngOnInit() {this.getBeersList();}

  getBeersList(page = this.page, size = this.tamanyo) {
    
    this.servicioCervezas.sacarCervezas(page, size).subscribe(
      
      (response: any)=>{this.checkAndAddFavourites(response);}, (error)=>{alert("No se ha podido acceder a las cervezas.")}
    
    )
  
  }

  checkAndAddFavourites (beersToParse: Array<Beer>){
    
    const favourites = this.servicioCervezas.sacarCervezasFavoritas(); 

    beersToParse.map(
      
      beer => {
      
        beer.isFavourite = favourites.includes(beer.id)? true : false;
      
        return beer;
      }
    
    )

    if (this.page == 1) {this.beers = beersToParse;}
    
    else {this.beers = this.beers.concat(beersToParse); }
  
  }
  
  updateFavourite(beer: Beer, index) {
    
    if (beer.isFavourite){
    
      this.servicioCervezas.borrarCervezaFavorita(beer.id);
    
      this.beers[index].isFavourite = false;
    
    }
  
    else {
    
      this.servicioCervezas.anyadirCervezaFavorita(beer.id);
    
      this.beers[index].isFavourite = true;
  
    }

  }

   openPopUp (beer: any)  {
    
    this.servicioCervezas.cervezaSeleccionada = this.cerveza;
    
    const popUpRef = this.popUp.open(DetailsPopupComponent, {width: '80%', data: beer});
  
  }

}
