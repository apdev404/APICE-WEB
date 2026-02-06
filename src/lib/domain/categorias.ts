import { mapToSelectOptions } from "$lib/utils/filters.mapper";
import { categoriasService } from "$lib/services/categoriasService";

export type CategoriasJSON = {
  id?: string
  nombre: string
  descripcion: string   
}



export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}




export class Categoria {
  errors: ValidationMessage[] = []

  constructor(
    public id?: string,
    public nombre: string = '',
    public descripcion: string = '',  
  ) {}

  static fromJson(json: CategoriasJSON): Categoria {
    return new Categoria(
        json.id,
        json.nombre,
        json.descripcion,
    );
    }


    toJSON(): CategoriasJSON {
    return {
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
    };
    }  
}



const categorias = await categoriasService.getCategorias()

export const categoriasOptions = mapToSelectOptions(
  categorias,
  "nombre",
  "id"
)
