import { Consultor } from '$lib/domain/consultor.js'
import { consultoresService } from '$lib/services/consultoresService.js'
import type { PageLoad } from './$types'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('directivos:list')
    const directivos: Consultor[] = await consultoresService.getDirectivos()
    return { directivos }
  } catch (error) {
    console.error('Error cargando consultores:', error)
    return {
      directivos: []
    }
  }
}