export type EstadoSolicitud = 
  | 'pendiente'
  | 'aprobada'
  | 'rechazada'


export type SolicitudJSON = {
  id?: number
  nombre: string
  email: string
  membresia: string   // o number si tu FK es INT
  estado: EstadoSolicitud
  fecha_solicitud: string
  licencia_id?: string | null
}


export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}


export class Solicitud {
  errors: ValidationMessage[] = []

  constructor(
    public id?: number,
    public nombre: string = '',
    public email: string = '',
    public membresia: string = '',
    public estado: EstadoSolicitud = 'pendiente',
    public fecha_solicitud: Date = new Date(),
    public licencia_id?: string | null,
  ) {}

  static fromJson(json: SolicitudJSON): Solicitud {
    return new Solicitud(
      json.id,
      json.nombre,
      json.email,
      json.membresia,
      json.estado,
      new Date(json.fecha_solicitud),
      json.licencia_id ?? null
    )
  }

  toJSON(): SolicitudJSON {
    return {
      id: this.id,
      nombre: this.nombre,
      email: this.email,
      membresia: this.membresia,
      estado: this.estado,
      fecha_solicitud: this.fecha_solicitud.toISOString(),
      licencia_id: this.licencia_id ?? null
    }
  }

  validate(): boolean {
    this.errors = []

    if (!this.nombre.trim()) {
      this.errors.push(new ValidationMessage('nombre', 'El nombre es obligatorio'))
    }

    if (!this.email.trim()) {
      this.errors.push(new ValidationMessage('email', 'El email es obligatorio'))
    }

    if (!this.membresia) {
      this.errors.push(new ValidationMessage('membresia', 'Debe seleccionar una membresía'))
    }

    return this.errors.length === 0
  }
}