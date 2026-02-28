import type { Membresia } from '$lib/domain/membresias'
import { membresiasService } from '$lib/services/membresiasService'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('membresias:list')
    const membresias: Membresia[] = await membresiasService.getMembresias()
    return { membresias }
  } catch (error) {
    console.error('Error cargando membresias:', error)
    return {
      membresias: []
    }
  }
}