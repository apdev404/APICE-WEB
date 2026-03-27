import { capacitacionesService } from '$lib/services/capacitacionesService.js'
import { Capacitacion } from '$lib/domain/capacitacion.js'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('capacitacionesLibres:list')
    depends('capacitacionesMiembros:list')
    const capacitacionesLibres: Capacitacion[] = await capacitacionesService.getCapacitacionesLibres() 
    const capacitacionesMiembros: Capacitacion[] = await capacitacionesService.getCapacitacionesMiembros() 
    return { capacitacionesLibres, capacitacionesMiembros }
  } catch (error) {
    console.error('Error cargando capacitaciones:', error)
    return {
      capacitacionesLibres: [],
      capacitacionesMiembros: []
    }
  }
}