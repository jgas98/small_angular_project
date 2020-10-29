import { Component, OnInit, Input, Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; //SERVICIO PARA ABRIR EL POPUP

import { Beer } from '../../Modelo/Beer';

import { BeersService }  from '../../Servicio/cervezas.service';

@Component({
  
  selector: 'app-details-popup',
  
  templateUrl: './popup.component.html',
  
  styleUrls: ['./popup.component.css']
})

export class DetailsPopupComponent implements OnInit {
 
  public similarBeers: Beer [] = [];

  constructor(
    
    private route: ActivatedRoute,
    
    private beerService: BeersService,
    
    public popUp: MatDialogRef<DetailsPopupComponent>,
    
    @Inject (MAT_DIALOG_DATA) public beer: any

  ) {}

   async ngOnInit() {
    
    for (let i = 0; i < 3; i++) {
    
      const similarBeer = await this.beerService.sacarCervezaSimilar().toPromise();
    
      this.similarBeers.push(...similarBeer);
    
    }
  
  } 
  
  public closePopUp() {this.popUp.close();}

}