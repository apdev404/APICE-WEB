import { Solicitud } from '$lib/domain/solicitud'
import type { PageLoad } from './$types'
import { solicitudService } from '$lib/services/solicitudesService'
import type { Licencia } from '$lib/domain/licencia'
import { licenciasService } from '$lib/services/licenciasService'

export const load : PageLoad = async ({ depends }) => {
  try {
    depends('solicitudes:list')
    depends('licencias:list')
    const solicitudes: Solicitud[] = await solicitudService.getSolicitudes() 
    const licencias: Licencia[] = await licenciasService.getLicencias() 
    return { solicitudes, licencias }
  } catch (error) {
    console.error('Error cargando solicitudes:', error)
    return {
      solicitudes: [],
      licencias: []
    }
  }
}