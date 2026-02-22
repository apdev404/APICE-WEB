import { Articulo } from '$lib/domain/articulos'
import { articulosService } from '$lib/services/articulosService'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('articulos:list')
    const articulos: Articulo[] = await articulosService.getArticulos()
    return { articulos }
  } catch (error) {
    console.error('Error cargando articulos:', error)
    return {
      articulos: [],
    }
  }
}