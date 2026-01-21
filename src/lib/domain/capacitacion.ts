import { toBool, toDate, toDateString } from "$lib/utils/Convertidores"

export type CapacitacionJSON = {
  id?: string
  capacitacion: string
  imgURL: string
  duracion: string
  cupos: number
  categoria: string
  consultor: string
  especialidad_consultor: string
  modalidad: string  
}



export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}




export class Capacitacion {
  errors: ValidationMessage[] = []

  constructor(
    public id?: string,
    public capacitacion: string = '',
    public imgURL: string = '',
    public duracion: string = '',
    public cupos: number = 0,
    public categoria: string = '',
    public consultor: string = '',
    public especialidad_consultor: string = '',
    public modalidad: string = '',
  ) {}

  static fromJson(json: CapacitacionJSON): Capacitacion {
    return new Capacitacion(
        json.id,
        json.capacitacion,
        json.categoria,
        json.consultor,
        json.cupos,
        json.duracion,
        json.especialidad_consultor,
        json.imgURL,
        json.modalidad
    );
    }


    toJSON(): CapacitacionJSON {
    return {
        id: this.id,
        capacitacion: this.capacitacion,
        imgURL: this.imgURL,
        duracion: this.duracion,
        cupos: this.cupos,
        categoria: this.categoria,
        consultor: this.consultor,
        especialidad_consultor: this.especialidad_consultor,
        modalidad: this.modalidad
    };
    }



  
}