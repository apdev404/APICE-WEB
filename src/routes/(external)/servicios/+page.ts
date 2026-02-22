import { Consultor } from '$lib/domain/consultor.js'
import { consultoresService } from '$lib/services/consultoresService.js'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('consultores:list')
    const consultores: Consultor[] = await consultoresService.getConsultores()
    return { consultores }
  } catch (error) {
    console.error('Error cargando consultores:', error)
    return {
      consultores: []
    }
  }
}