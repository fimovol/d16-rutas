import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { HomeComponent } from './principal/home/home.component';
import { ProductosComponent } from './principal/productos/productos.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"productos",component:ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
