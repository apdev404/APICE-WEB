import { Consultor } from '$lib/domain/consultor.js'
import { consultoresService } from '$lib/services/consultoresService.js'
import { capacitacionesService } from '$lib/services/capacitacionesService.js'
import { Capacitacion } from '$lib/domain/capacitacion.js'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('consultores:list')
    depends('capacitaciones:list')
    const consultores: Consultor[] = await consultoresService.getConsultores()
    const capacitaciones: Capacitacion[] = await capacitacionesService.getCapacitaciones() 
    return { consultores, capacitaciones }
  } catch (error) {
    console.error('Error cargando consultores:', error)
    return {
      consultores: [],
      capacitaciones: []
    }
  }
}