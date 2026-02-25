//import { toBool, toDate, toDateString } from "$lib/utils/Convertidores"

export type CapacitacionJSON = {
  id?: string
  capacitacion: string
  imgURL: string
  duracion: string
  cupos: number
  nivel_minimo: number
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
    public nivel_minimo: number = 0,
    public categoria: string = '',
    public consultor: string = '',
    public especialidad_consultor: string = '',
    public modalidad: string = '',
  ) {}

  static fromJson(json: CapacitacionJSON): Capacitacion {
    return new Capacitacion(
        json.id,
        json.capacitacion,
        json.imgURL,
        json.duracion,
        json.cupos,
        json.nivel_minimo,
        json.categoria,
        json.consultor,
        json.especialidad_consultor,
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
        modalidad: this.modalidad,
        nivel_minimo: this.nivel_minimo
    };
    } 
}


export type CapacitacionDetalleJSON = {
  id?: string
  capacitacion: string
  descripcion: string
  imgURL: string
  duracion: string
  cupos: number
  categoria: string
  consultor: string
  especialidad_consultor: string
  modalidad: string  
  form_inscripcion: string
  nivel_minimo: number
}




export class CapacitacionDetalle {
  errors: ValidationMessage[] = []

  constructor(
    public id?: string,
    public capacitacion: string = '',
    public descripcion: string = '',
    public imgURL: string = '',
    public duracion: string = '',
    public cupos: number = 0,
    public categoria: string = '',
    public consultor: string = '',
    public especialidad_consultor: string = '',
    public modalidad: string = '',
    public form_inscripcion: string = '',
    public nivel_minimo: number = 0
  ) {}

  static fromJson(json: CapacitacionDetalleJSON): CapacitacionDetalle {
    return new CapacitacionDetalle(
        json.id,
        json.capacitacion,
        json.descripcion,
        json.imgURL,
        json.duracion,
        json.cupos,
        json.categoria,
        json.consultor,
        json.especialidad_consultor,
        json.modalidad,
        json.form_inscripcion,
        json.nivel_minimo
    );
    }


    toJSON(): CapacitacionDetalleJSON {
    return {
        id: this.id,
        capacitacion: this.capacitacion,
        descripcion: this.descripcion,
        imgURL: this.imgURL,
        duracion: this.duracion,
        cupos: this.cupos,
        categoria: this.categoria,
        consultor: this.consultor,
        especialidad_consultor: this.especialidad_consultor,
        modalidad: this.modalidad,
        form_inscripcion: this.modalidad,      
        nivel_minimo: this.nivel_minimo
    };
    } 
}