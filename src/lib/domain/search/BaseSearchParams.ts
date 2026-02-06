export interface BaseSearchParams {
  text?: string;
  categoriaId?: string;
  order?: "az" | "za" | "fecha_asc" | "fecha_desc";
  limit?: number;
  offset?: number;
}
