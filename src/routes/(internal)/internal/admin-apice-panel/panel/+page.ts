import { Solicitud } from '$lib/domain/solicitud'
import type { PageLoad } from './$types'
import { solicitudService } from '$lib/services/solicitudesService'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('solicitudes:list')
    const solicitudes: Solicitud[] = await solicitudService.getSolicitudes() 
    return { solicitudes }
  } catch (error) {
    console.error('Error cargando solicitudes:', error)
    return {
      solicitudes: []
    }
  }
}