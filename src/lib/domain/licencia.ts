export type LicenciaJSON = {
  id: string
  email: string
  membresia_id: string
  token: string
  fecha_inicio: string
  expires_at: string
  estado: string
  confirmed_by: string
  created_at: string
  nivel: number
}

export class ValidationMessage {
  constructor(public field: string, public message: string) {}
}

export class Licencia {
  errors: ValidationMessage[] = []

  constructor(
    public id: string = '',
    public email: string = '',
    public membresia_id: string = '',
    public token: string = '',
    public fecha_inicio: Date = new Date(),
    public expires_at: Date = new Date(),
    public estado: string = '',
    public confirmed_by: string = '',
    public created_at: Date = new Date(),
    public nivel: number = 0
  ) {}

  static fromJson(json: LicenciaJSON): Licencia {
    return new Licencia(
      json.id,
      json.email,
      json.membresia_id,
      json.token,
      new Date(json.fecha_inicio),
      new Date(json.expires_at),
      json.estado,
      json.confirmed_by,
      new Date(json.created_at),
      json.nivel
    )
  }

  toJSON(): LicenciaJSON {
    return {
      id: this.id,
      email: this.email,
      membresia_id: this.membresia_id,
      token: this.token,
      fecha_inicio: this.fecha_inicio.toISOString(),
      expires_at: this.expires_at.toISOString(),
      estado: this.estado,
      confirmed_by: this.confirmed_by,
      created_at: this.created_at.toISOString(),
      nivel: this.nivel
    }
  }

  validate(): boolean {
    this.errors = []

    if (!this.email.trim()) {
      this.errors.push(
        new ValidationMessage('email', 'El email es obligatorio')
      )
    }

    if (this.nivel <= 0) {
      this.errors.push(
        new ValidationMessage('nivel', 'El nivel debe ser mayor a 0')
      )
    }

    if (!this.estado) {
      this.errors.push(
        new ValidationMessage('estado', 'El estado es obligatorio')
      )
    }

    return this.errors.length === 0
  }
}