import { toDate, toDateString } from "$lib/utils/Convertidores"

export type ArticulosJSON = {
  id?: string
  titulo: string
  descripcion: string
  autor_nombre: string
  pdf_url: string
  fecha_publicacion: string
  categoria: string
  consultor: string
}



export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}




export class Articulo {
  errors: ValidationMessage[] = []

  constructor(
    public id?: string,
    public titulo: string = '',
    public descripcion: string = '',
    public autor_nombre: string = '',
    public pdf_url: string = '',
    public fecha_publicacion: number = Date.now(),
    public categoria: string = '',
    public consultor: string = '',
  ) {}

  static fromJson(json: ArticulosJSON): Articulo {
    return new Articulo(
        json.id,
        json.titulo,
        json.descripcion,
        json.autor_nombre,
        json.pdf_url,
        toDate(json.fecha_publicacion).getTime(),
        json.categoria,
        json.consultor
    );
    }


  toJSON(): ArticulosJSON {
    return {
        id: this.id,
        titulo: this.titulo,
        descripcion: this.descripcion,
        autor_nombre: this.autor_nombre,
        pdf_url: this.pdf_url,
        fecha_publicacion: toDateString(new Date(this.fecha_publicacion)),
        categoria: this.categoria,
        consultor: this.consultor
    };
    }


  
}