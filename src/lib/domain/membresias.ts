export type MembresiaJSON = {
    nombre: string
    nivel: number
    duracion_dias: number
    created_at: Date
    id?: string
    precio: number   
}



export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}




export class Membresia {
  errors: ValidationMessage[] = []

  constructor(
    public nombre: string = '',
    public nivel: number = 0,
    public duracion_dias: number = 0,
    public created_at: Date,
    public id?: string,
    public precio: number = 0,  
  ) {}

  static fromJson(json: MembresiaJSON): Membresia {
    return new Membresia(
        json.nombre,
        json.nivel,
        json.duracion_dias,
        json.created_at,
        json.id,
        json.precio
    );
    }


    toJSON(): MembresiaJSON {
    return {
        nombre: this.nombre,
        nivel: this.nivel,
        duracion_dias: this.duracion_dias,
        created_at: this.created_at,
        id: this.id,
        precio: this.precio,
    };
    }  
}



