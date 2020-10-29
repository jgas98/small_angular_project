import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './Routing/app-routing.module';

import { AppComponent } from './app.component';

import { ToolbarComponent } from './Componentes/Toolbar/toolbar.component';

import { HomeCardsComponent } from './Componentes/TarjetaProducto/tarjeta-producto.component';

import { FavouriteCardsComponent } from './Componentes/Favoritos/favoritos.component';

import { MaterialModule } from './material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DetailsPopupComponent } from './Componentes/Popup/popup.component';

@NgModule({
  
  declarations: [
    
    AppComponent,
    
    ToolbarComponent,
    
    HomeCardsComponent,
    
    FavouriteCardsComponent,
    
    DetailsPopupComponent
  ],
  
  imports: [
  
    BrowserModule,
  
    AppRoutingModule,
  
    HttpClientModule,
  
    MaterialModule,
  
    BrowserAnimationsModule,
  
    InfiniteScrollModule,
  
    FormsModule,
  
    ReactiveFormsModule
  ],
  
  providers: [],
  
  bootstrap: [AppComponent],
  
  entryComponents: [DetailsPopupComponent]

})


export class AppModule { }
