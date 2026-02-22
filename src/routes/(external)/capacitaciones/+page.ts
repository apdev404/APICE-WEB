import { capacitacionesService } from '$lib/services/capacitacionesService.js'
import { Capacitacion } from '$lib/domain/capacitacion.js'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('capacitaciones:list')
    const capacitaciones: Capacitacion[] = await capacitacionesService.getCapacitaciones() 
    return { capacitaciones }
  } catch (error) {
    console.error('Error cargando capacitaciones:', error)
    return {
      capacitaciones: []
    }
  }
}