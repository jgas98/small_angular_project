import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeCardsComponent } from '../Componentes/TarjetaProducto/tarjeta-producto.component'

import { FavouriteCardsComponent } from '../Componentes/Favoritos/favoritos.component'

const routes: Routes = [
  
  { path: '', component: HomeCardsComponent},
  
  { path: 'favourite', component: FavouriteCardsComponent}

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]

})

export class AppRoutingModule { }
