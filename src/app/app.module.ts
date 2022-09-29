import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { ClientesComponent } from './Component/clientes/clientes.component';
import { CitasComponent } from './Component/citas/citas.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TipossuelosComponent } from './Component/tipossuelos/tipossuelos.component';
import { ColorpinturaComponent } from './Component/colorpintura/colorpintura.component';
import { ClienteService } from './Service/cliente.service';
import { AddclienteComponent } from './Component/addcliente/addcliente.component';
import { CitaService } from './Service/cita.service';
import { PinturaService } from './Service/pintura.service';
import { RodapiesComponent } from './Component/rodapies/rodapies.component';
import { RodapiesService } from './Service/rodapies.service';
import { AddcitasComponent } from './Component/addcitas/addcitas.component';
import { UpdateSuelosComponent } from './Component/update-suelos/update-suelos.component';
import { UpdateClienteComponent } from './Component/update-cliente/update-cliente.component';
import { TrabajadoresComponent } from './Component/trabajadores/trabajadores.component';
import { UpdateTrabajadoresComponent } from './Component/update-trabajadores/update-trabajadores.component';
import { AddTrabajadoresComponent } from './Component/add-trabajadores/add-trabajadores.component';
import { TrabajadoresService } from './Service/trabajadores.service';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[

  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'logueado/Clientes', component:ClientesComponent},
  {path:'logueado/Citas', component:CitasComponent},
  {path:'logueado/Pinturas', component:ColorpinturaComponent},
  {path:'logueado/Suelos', component:TipossuelosComponent},
  {path:'logueado/Suelos/Update/:id', component:UpdateSuelosComponent},
  {path:'logueado/Clientes/Añadir', component:AddclienteComponent},
  {path:'logueado/Clientes/Update/:id', component:UpdateClienteComponent},
  {path:'logueado/Rodapies', component: RodapiesComponent},
  {path:'logueado/Citas/Añadir', component:AddcitasComponent},
  {path:'logueado/Trabajadores', component:TrabajadoresComponent},
  {path:'logueado/Trabajadores/Añadir', component:AddTrabajadoresComponent},
  {path:'logueado/Trabajadores/Update/:id', component:UpdateTrabajadoresComponent},





];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    CitasComponent,
    TipossuelosComponent,
    ColorpinturaComponent,
    AddclienteComponent,
    RodapiesComponent,
    AddcitasComponent,
    UpdateSuelosComponent,
    UpdateClienteComponent,
    TrabajadoresComponent,
    UpdateTrabajadoresComponent,
    AddTrabajadoresComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
 
    RouterModule.forRoot(routes)
    
  ],
  providers: [ CitaService, PinturaService, RodapiesService, TrabajadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
