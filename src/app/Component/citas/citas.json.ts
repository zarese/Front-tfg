import { Cita } from "src/app/Models/Citas.interface";
import { Cliente } from "src/app/Models/Cliente.interface";

export const CITAS: Cita[]=[
    {id_cita:1,trabajador_id: 1,cliente_id: {id: 1, dni_cif:'000000000X' ,nombre:'Manolo', apellidos:'Sanz', email:'manolo@gmail.com',direccion:'flora tristan',segundireccion:'', telefono:601091042}, motivo:'el cliente necesita tapar una mancha en la pared y cambiar el suelo',direccion:1, interes_pintura: 1 ,interes_suelo:1,interes_rodapies:1, fecha: '2021/11/31'},
    {id_cita:2,trabajador_id: 1,cliente_id: {id: 3,dni_cif:'000000001X' , nombre:'Alba', apellidos:'Rubio', email:'albus@gmail.com',direccion:'villaverde a vallecas',segundireccion:'flora tristan',telefono:601052042}, motivo:'cambio de suelo de la cocina, el cliente pide que sean balsosas, ya que las anteriores estan levantadas por el paso del tiempo y la humedad, la sperficie a rellena es de 22 m2',direccion:1, interes_pintura: 0,interes_suelo:3,interes_rodapies:1, fecha: '2021/10/25'},
    {id_cita:3,trabajador_id: 1,cliente_id:   {id: 6, nombre:'Martín',dni_cif:'08529135Z' , apellidos:'Pérez Castro', email:'martin@gmail.com',direccion:'calle de la Concordia 15,3B',segundireccion:'',telefono:658458234}, motivo:'prueba cita 1',direccion:1, interes_pintura: 1,interes_suelo:1,interes_rodapies:1, fecha: '2022/06/05'}




]
