import { Cliente } from "./Cliente.interface";

export class Cita {
    id_cita!: number;
    trabajador_id!:number;
    cliente_id!:Cliente;
    motivo!: string;
    interes_pintura!: number;
    interes_suelo!: number;
    interes_rodapies!:number;
    direccion!:number;
    fecha!:string;

}