import { toBool, toDate, toDateString } from "$lib/utils/Convertidores"

export type ConsultorJSON = {
  id?: string
  nombre: string
  descripcion: string
  titulo_academico: string
  anios_experiencia: number
  email: string
  telefono: string
  disponibilidad: number
  especialidad: string
  created_at: string
  updated_at: string
  img_profile_url: string
  directivo: number
  consultor: number
}



export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}




export class Consultor {
  errors: ValidationMessage[] = []

  constructor(
    public id?: string,
    public nombre: string = '',
    public descripcion: string = '',
    public titulo_academico: string = '',
    public anios_experiencia: number = -1,
    public email: string = '',
    public telefono: string = '',
    public disponibilidad: boolean = true,
    public especialidad: string = '',
    public created_at: number = Date.now(),
    public updated_at: number = Date.now(),
    public img_profile_url: string = '',
    public directivo: boolean = false,
    public consultor: boolean = true,
  ) {}

  static fromJson(json: ConsultorJSON): Consultor {
    return new Consultor(
        json.id,
        json.nombre,
        json.descripcion,
        json.titulo_academico,
        json.anios_experiencia,
        json.email,
        json.telefono,

        // tinyint → boolean
        toBool(json.disponibilidad),

        json.especialidad,

        // string → Date
        toDate(json.created_at).getTime(),
        toDate(json.updated_at).getTime(),

        json.img_profile_url,

        // tinyint → boolean
        toBool(json.directivo),
        toBool(json.consultor)
    );
    }


  toJSON(): ConsultorJSON {
    return {
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        titulo_academico: this.titulo_academico,
        anios_experiencia: this.anios_experiencia,
        email: this.email,
        telefono: this.telefono,

        // boolean → tinyint
        disponibilidad: this.disponibilidad ? 1 : 0,

        especialidad: this.especialidad,

        // Date → string SQL
        created_at: toDateString(new Date(this.created_at)),
        updated_at: toDateString(new Date(this.updated_at)),

        img_profile_url: this.img_profile_url,

        directivo: this.directivo ? 1 : 0,
        consultor: this.consultor ? 1 : 0,
    };
    }


  
}